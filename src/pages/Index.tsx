import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время для подтверждения консультации.",
    });
    setFormData({ name: '', email: '', phone: '', message: '', date: '', time: '' });
  };

  const services = [
    {
      icon: "Heart",
      title: "Индивидуальная терапия",
      description: "Личные консультации для работы с тревогой, депрессией, самооценкой и личностным ростом",
      duration: "50 минут"
    },
    {
      icon: "Users",
      title: "Семейная терапия",
      description: "Помощь в разрешении конфликтов и улучшении взаимопонимания между членами семьи",
      duration: "60 минут"
    },
    {
      icon: "Video",
      title: "Онлайн-консультации",
      description: "Удобный формат видеосвязи для тех, кто предпочитает дистанционную работу",
      duration: "50 минут"
    },
    {
      icon: "Brain",
      title: "Когнитивно-поведенческая терапия",
      description: "Работа с негативными мыслями и паттернами поведения, развитие новых стратегий",
      duration: "50 минут"
    }
  ];

  const blogPosts = [
    {
      title: "Как справиться с тревогой: 5 практических методов",
      excerpt: "Тревога — естественная реакция на стресс. Узнайте простые техники, которые помогут вам вернуть контроль.",
      date: "15 декабря 2024"
    },
    {
      title: "Границы в отношениях: почему они важны",
      excerpt: "Здоровые границы — основа гармоничных отношений. Разбираемся, как их устанавливать и защищать.",
      date: "10 декабря 2024"
    },
    {
      title: "Работа с эмоциональным выгоранием",
      excerpt: "Признаки выгорания и способы восстановления внутренних ресурсов для возвращения энергии.",
      date: "5 декабря 2024"
    }
  ];

  const testimonials = [
    {
      name: "Анна М.",
      text: "Благодаря работе с психологом я научилась понимать свои эмоции и справляться с тревогой. Атмосфера доверия и поддержки помогла мне открыться.",
      rating: 5
    },
    {
      name: "Дмитрий К.",
      text: "Профессиональный подход и искренняя забота. Онлайн-формат оказался очень удобным, а результаты превзошли ожидания.",
      rating: 5
    },
    {
      name: "Елена С.",
      text: "Семейная терапия помогла нам с мужем найти общий язык и выстроить более гармоничные отношения. Очень рекомендую!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Как проходит первая консультация?",
      answer: "Первая встреча — это знакомство. Мы обсудим ваш запрос, цели терапии и подходящий формат работы. Вы сможете задать все интересующие вопросы в комфортной обстановке."
    },
    {
      question: "Сколько длится курс терапии?",
      answer: "Длительность зависит от вашего запроса и целей. Краткосрочная терапия может занять 5-10 сессий, долгосрочная работа — несколько месяцев. Мы будем регулярно оценивать прогресс."
    },
    {
      question: "Конфиденциальность гарантирована?",
      answer: "Абсолютно. Всё, что обсуждается на сеансах, остаётся строго конфиденциальным. Я соблюдаю профессиональную этику и законодательство о защите персональных данных."
    },
    {
      question: "Можно ли проводить консультации онлайн?",
      answer: "Да, я провожу онлайн-консультации через защищённые платформы видеосвязи. Это так же эффективно, как и личные встречи, и более удобно для многих клиентов."
    },
    {
      question: "Как подготовиться к консультации?",
      answer: "Специальная подготовка не требуется. Постарайтесь выбрать спокойное время и место, где вас никто не побеспокоит. Приходите с открытостью и готовностью к диалогу."
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-card border-b sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">ПсихоПоддержка</h1>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#booking" className="text-foreground hover:text-primary transition-colors">Запись</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Записаться</Button>
        </nav>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">Профессиональная психологическая помощь</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Путь к внутренней гармонии начинается здесь
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Я помогаю людям обрести душевное равновесие, справиться с трудностями и раскрыть свой потенциал. 
                Создаю безопасное пространство для вашего личностного роста.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Calendar" size={20} />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Phone" size={20} />
                  Связаться
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/65a381f5-f823-4df9-a3e8-85b366ddbd58/files/53960d0d-b060-4317-91ae-745a700d0a7a.jpg" 
                  alt="Гармония и внутренний покой"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/65a381f5-f823-4df9-a3e8-85b366ddbd58/files/0234f22d-8faf-4c93-87ab-8435fac1724e.jpg" 
                  alt="Профессиональный психолог"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <Badge className="mb-4">Обо мне</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Психолог с 10-летним опытом работы
              </h3>
              <p className="text-muted-foreground mb-4">
                Я — дипломированный психолог-консультант с опытом работы более 10 лет. Специализируюсь 
                на когнитивно-поведенческой терапии, работе с тревожными расстройствами и семейными отношениями.
              </p>
              <p className="text-muted-foreground mb-6">
                Моя цель — создать безопасное пространство, где вы сможете быть собой, исследовать свои чувства 
                и найти пути к внутренней гармонии. Я верю, что каждый человек обладает ресурсами для изменений.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Образование</h4>
                    <p className="text-sm text-muted-foreground">МГУ, факультет психологии</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="BookOpen" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Сертификаты</h4>
                    <p className="text-sm text-muted-foreground">КПТ, гештальт-терапия</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Клиентов</h4>
                    <p className="text-sm text-muted-foreground">Более 500 человек</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Опыт</h4>
                    <p className="text-sm text-muted-foreground">10+ лет практики</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Услуги</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Как я могу вам помочь</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Предлагаю различные форматы психологической помощи, адаптированные под ваши потребности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Запись на консультацию</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Сделайте первый шаг к переменам</h3>
              <p className="text-muted-foreground">
                Заполните форму, и я свяжусь с вами для уточнения деталей и подтверждения времени
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Предпочитаемая дата</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Предпочитаемое время</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Расскажите о вашем запросе (необязательно)</Label>
                    <Textarea
                      id="message"
                      placeholder="Кратко опишите, с чем вы хотели бы поработать..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Блог</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Полезные материалы</h3>
            <p className="text-muted-foreground">
              Статьи и советы по психологии для вашего личностного развития
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/65a381f5-f823-4df9-a3e8-85b366ddbd58/files/487ee45c-9be5-4374-b9ee-aefb05a6068a.jpg"
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Что говорят клиенты</h3>
            <p className="text-muted-foreground">
              Реальные истории людей, которым я помогла
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardDescription className="text-base">{testimonial.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">FAQ</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h3>
              <p className="text-muted-foreground">
                Ответы на вопросы, которые чаще всего задают клиенты
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;