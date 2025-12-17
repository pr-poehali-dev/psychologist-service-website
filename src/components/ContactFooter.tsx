import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactFooter = () => {
  return (
    <>
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы начать свой путь к изменениям?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Свяжитесь со мной удобным способом, и мы обсудим, как я могу помочь именно вам
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-primary-foreground text-foreground">
                <CardHeader>
                  <Icon name="Phone" size={32} className="mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">Телефон</CardTitle>
                  <CardDescription>+7 (999) 123-45-67</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-primary-foreground text-foreground">
                <CardHeader>
                  <Icon name="Mail" size={32} className="mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>help@psycho-support.ru</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-primary-foreground text-foreground">
                <CardHeader>
                  <Icon name="MessageCircle" size={32} className="mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">Telegram</CardTitle>
                  <CardDescription>@psycho_support</CardDescription>
                </CardHeader>
              </Card>
            </div>
            <p className="text-sm opacity-75">
              Режим работы: Пн-Пт 10:00-20:00, Сб 11:00-18:00
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 ПсихоПоддержка. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
