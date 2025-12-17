import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <>
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
                  src="https://cdn.poehali.dev/files/IMG_9116.JPG" 
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
    </>
  );
};

export default HeroSection;