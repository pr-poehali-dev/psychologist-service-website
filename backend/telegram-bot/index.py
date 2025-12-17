import json
import os
from typing import Dict, Any
from pydantic import BaseModel, Field, EmailStr


class BookingRequest(BaseModel):
    '''Модель данных заявки на консультацию'''
    name: str = Field(..., min_length=1)
    email: EmailStr
    phone: str = Field(..., min_length=5)
    message: str = ""
    date: str = ""
    time: str = ""


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправляет заявки на консультацию в Telegram-бот
    Args: event - данные HTTP запроса, context - контекст выполнения
    Returns: HTTP ответ с результатом отправки
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    booking = BookingRequest(**body_data)
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Telegram не настроен'})
        }
    
    message_text = f"""
🔔 Новая заявка на консультацию

👤 Имя: {booking.name}
📧 Email: {booking.email}
📱 Телефон: {booking.phone}
📅 Дата: {booking.date if booking.date else 'Не указана'}
⏰ Время: {booking.time if booking.time else 'Не указано'}
💬 Сообщение: {booking.message if booking.message else 'Не указано'}
"""
    
    import urllib.request
    import urllib.parse
    
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': message_text,
        'parse_mode': 'HTML'
    }).encode('utf-8')
    
    try:
        req = urllib.request.Request(url, data=data)
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            
            if result.get('ok'):
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'success': True, 'message': 'Заявка отправлена в Telegram'})
                }
            else:
                return {
                    'statusCode': 500,
                    'headers': {'Content-Type': 'application/json'},
                    'body': json.dumps({'error': 'Ошибка отправки в Telegram'})
                }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': f'Ошибка: {str(e)}'})
        }
