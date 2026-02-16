import { Scissors, Clock, MapPin, Phone, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const services = [
  { name: "Corte Masculino", price: "R$ 45", description: "Corte clássico ou moderno com acabamento perfeito" },
  { name: "Barba", price: "R$ 30", description: "Modelagem e aparação com navalha e toalha quente" },
  { name: "Corte + Barba", price: "R$ 65", description: "Combo completo para visual impecável" },
  { name: "Degradê", price: "R$ 50", description: "Transição suave e precisa com máquina" },
  { name: "Sobrancelha", price: "R$ 15", description: "Design e limpeza com navalha" },
  { name: "Pigmentação", price: "R$ 40", description: "Cobertura de falhas na barba ou cabelo" },
];

const hours = [
  { day: "Segunda a Sexta", time: "09:00 - 20:00" },
  { day: "Sábado", time: "09:00 - 18:00" },
  { day: "Domingo", time: "Fechado" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="w-5 h-5 text-primary" />
            <span className="font-display text-xl font-bold text-foreground tracking-wide">
              BARBER<span className="text-primary">SHOP</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8 font-body text-sm tracking-widest uppercase">
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Interior da barbearia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="inline-block border border-primary/40 px-4 py-1 mb-6">
            <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">Estilo & Tradição</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            A Arte do <span className="text-primary">Corte</span> Perfeito
          </h1>
          <p className="text-muted-foreground font-body text-lg mb-8 max-w-xl mx-auto">
            Experiência premium em barbearia masculina. Tradição, estilo e precisão em cada detalhe.
          </p>
          <a
            href="#servicos"
            className="inline-block bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Nossos Serviços
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">O que oferecemos</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">Serviços</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-card border border-border p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-primary font-display text-xl font-bold">{service.price}</span>
                </div>
                <p className="text-muted-foreground text-sm font-body">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">Nossa história</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-8">Sobre Nós</h2>
          <p className="text-secondary-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Há mais de 10 anos trazendo o melhor em cortes e cuidados masculinos. 
            Nossa barbearia combina técnicas tradicionais com tendências modernas, 
            criando um espaço onde estilo e conforto se encontram.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            Cada cliente recebe atenção personalizada dos nossos barbeiros experientes, 
            garantindo um resultado que reflete sua personalidade e estilo único.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">Venha nos visitar</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">Contato</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-primary/40 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Endereço</h3>
              <p className="text-muted-foreground text-sm font-body">
                Rua da Barbearia, 123<br />Centro - São Paulo, SP
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-primary/40 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Telefone</h3>
              <p className="text-muted-foreground text-sm font-body">
                (11) 99999-9999<br />(11) 3333-3333
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 border border-primary/40 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Horários</h3>
              {hours.map((h) => (
                <p key={h.day} className="text-muted-foreground text-sm font-body">
                  {h.day}: <span className="text-foreground">{h.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Scissors className="w-4 h-4 text-primary" />
            <span className="font-display text-sm font-bold text-foreground tracking-wide">
              BARBER<span className="text-primary">SHOP</span>
            </span>
          </div>
          <p className="text-muted-foreground text-xs font-body">
            © 2026 BarberShop. Todos os direitos reservados.
          </p>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
