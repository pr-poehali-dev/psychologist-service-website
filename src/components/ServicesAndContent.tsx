import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const ServicesAndContent = () => {
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
    <>
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
    </>
  );
};

export default ServicesAndContent;
