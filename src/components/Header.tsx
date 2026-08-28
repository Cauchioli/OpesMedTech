import { useState } from "react";
import { Menu, X, ChevronDown, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  specialtyTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ specialtyTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de tirar algumas dúvidas com a consultora comercial sobre a Opes Medtech.");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo & Brand Tag */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="Opes Medtech" className="h-7 md:h-9 transition-transform group-hover:scale-105" />
            </Link>
            {specialtyTitle && (
              <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                {specialtyTitle}
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link
              to="/"
              className={`transition-colors hover:text-primary ${
                isHomePage ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              Início
            </Link>

            <Link
              to="/pediatria"
              className={`transition-colors hover:text-primary ${
                location.pathname === "/pediatria"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              Opes Pediatria
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors focus:outline-none data-[state=open]:text-primary">
                <span>Opes Especialidades</span>
                <ChevronDown size={13} className="transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-1.5 rounded-xl bg-card border-border shadow-xl">
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link to="/terapia-ocupacional" className="flex flex-col items-start gap-0.5 p-2">
                    <span className="font-semibold text-foreground text-xs">Terapia Ocupacional</span>
                    <span className="text-[11px] text-muted-foreground">Integração sensorial e desenvolvimento</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link to="/psicologia" className="flex flex-col items-start gap-0.5 p-2">
                    <span className="font-semibold text-foreground text-xs">Psicologia Infantil</span>
                    <span className="text-[11px] text-muted-foreground">Neurodesenvolvimento e laudos</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link to="/enfermagem" className="flex flex-col items-start gap-0.5 p-2">
                    <span className="font-semibold text-foreground text-xs">Enfermagem e Fisioterapia</span>
                    <span className="text-[11px] text-muted-foreground">Evolução clínica e cuidados</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {isHomePage ? (
              <>
                <a href="#funcionalidades" className="text-muted-foreground hover:text-primary transition-colors">
                  Funcionalidades
                </a>
                <a href="#precos" className="text-muted-foreground hover:text-primary transition-colors">
                  Preços
                </a>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </>
            ) : (
              <>
                <Link to="/#funcionalidades" className="text-muted-foreground hover:text-primary transition-colors">
                  Funcionalidades
                </Link>
                <Link to="/#precos" className="text-muted-foreground hover:text-primary transition-colors">
                  Preços
                </Link>
                <Link to="/#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </>
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-xs font-semibold gap-1.5 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 h-8 px-3"
            >
              <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare size={13} className="text-emerald-500" />
                Falar com a Consultora
              </a>
            </Button>

            <Button variant="ghost" size="sm" asChild className="text-xs font-medium h-8 px-3">
              <a href="https://www.opespediatra.com/login">Entrar</a>
            </Button>

            <Button
              size="sm"
              className="bg-gradient-primary hover:opacity-90 shadow-primary text-xs font-semibold h-8 px-3.5"
              asChild
            >
              <a href="https://www.opespediatra.com/login">Teste Grátis 15 Dias</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2.5 font-medium text-xs">
              <Link
                to="/"
                className="px-3 py-1.5 rounded-lg hover:bg-muted text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Início (Opes Medtech)
              </Link>
              <Link
                to="/pediatria"
                className="px-3 py-1.5 rounded-lg hover:bg-muted text-foreground flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Opes Pediatria</span>
                <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-semibold">CRM</span>
              </Link>

              <div className="px-3 pt-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                Opes Especialidades
              </div>
              <div className="pl-4 flex flex-col gap-1 border-l border-primary/20 ml-3">
                <Link
                  to="/terapia-ocupacional"
                  className="py-1 text-xs text-foreground/90 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terapia Ocupacional
                </Link>
                <Link
                  to="/psicologia"
                  className="py-1 text-xs text-foreground/90 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Psicologia Infantil
                </Link>
                <Link
                  to="/enfermagem"
                  className="py-1 text-xs text-foreground/90 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enfermagem e Fisioterapia
                </Link>
              </div>

              <div className="pt-2 border-t border-border/50 flex flex-col gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full justify-center border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs"
                >
                  <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={14} className="mr-1.5 text-emerald-500" />
                    Falar com a Consultora
                  </a>
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="ghost" size="sm" asChild className="w-full justify-center text-xs">
                    <a href="https://www.opespediatra.com/login">Entrar</a>
                  </Button>
                  <Button size="sm" className="bg-gradient-primary w-full justify-center text-xs" asChild>
                    <a href="https://www.opespediatra.com/login">Teste Grátis</a>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
