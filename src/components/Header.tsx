import { Button } from '@/components/ui/button';

const Header = () => {
  return (
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
  );
};

export default Header;
