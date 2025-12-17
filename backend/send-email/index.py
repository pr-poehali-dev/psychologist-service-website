import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, EmailStr, Field, ValidationError


class BookingRequest(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    phone: str = Field(..., min_length=5)
    message: str = ""
    date: str = ""
    time: str = ""


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправка заявки на консультацию психолога на email
    Args: event с httpMethod, body (JSON с данными формы)
    Returns: HTTP response
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        booking = BookingRequest(**body_data)
        
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        recipient_email = os.environ.get('RECIPIENT_EMAIL')
        
        if not all([smtp_host, smtp_user, smtp_password, recipient_email]):
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'SMTP configuration missing'}),
                'isBase64Encoded': False
            }
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка на консультацию от {booking.name}'
        msg['From'] = smtp_user
        msg['To'] = recipient_email
        
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                    <h2 style="color: #9BC4BC; border-bottom: 2px solid #D4A373; padding-bottom: 10px;">
                        🌿 Новая заявка на консультацию
                    </h2>
                    
                    <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                        <h3 style="color: #2C3E50; margin-top: 0;">Контактные данные клиента:</h3>
                        
                        <p><strong>Имя:</strong> {booking.name}</p>
                        <p><strong>Email:</strong> <a href="mailto:{booking.email}">{booking.email}</a></p>
                        <p><strong>Телефон:</strong> <a href="tel:{booking.phone}">{booking.phone}</a></p>
                        
                        {f'<p><strong>Предпочитаемая дата:</strong> {booking.date}</p>' if booking.date else ''}
                        {f'<p><strong>Предпочитаемое время:</strong> {booking.time}</p>' if booking.time else ''}
                        
                        {f'<div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #9BC4BC; border-radius: 4px;"><p style="margin: 0;"><strong>Запрос клиента:</strong></p><p style="margin: 10px 0 0 0;">{booking.message}</p></div>' if booking.message else ''}
                    </div>
                    
                    <p style="margin-top: 20px; color: #666; font-size: 14px; text-align: center;">
                        Заявка отправлена с сайта ПсихоПоддержка
                    </p>
                </div>
            </body>
        </html>
        """
        
        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)
        
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            }),
            'isBase64Encoded': False
        }
        
    except ValidationError as e:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Invalid data', 'details': e.errors()}),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
