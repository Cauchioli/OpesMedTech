import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, MessageSquare } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${sectionId}`);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de tirar algumas dúvidas com a consultora comercial sobre a Opes Medtech.");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/60 shadow-xs">
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

          {/* Desktop Navigation matching Reference */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {!isHomePage && (
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Início
              </Link>
            )}
            <a
              href="#sobre"
              onClick={(e) => handleSectionClick(e, "sobre")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Sobre
            </a>
            <a
              href="#funcionalidades"
              onClick={(e) => handleSectionClick(e, "funcionalidades")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Recursos
            </a>
            <a
              href="#precos"
              onClick={(e) => handleSectionClick(e, "precos")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Planos
            </a>
            <a
              href="#contato"
              onClick={(e) => handleSectionClick(e, "contato")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Contato
            </a>

            {/* Specialties Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors focus:outline-none data-[state=open]:text-primary font-medium">
                <span>Especialidades</span>
                <ChevronDown size={13} className="transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-1.5 rounded-xl bg-card border-border shadow-xl">
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link to="/pediatria" className="flex flex-col items-start gap-0.5 p-2">
                    <span className="font-semibold text-foreground text-xs">Opes Pediatra</span>
                    <span className="text-[11px] text-muted-foreground">Médicos Pediatras (CRM)</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link to="/terapia-ocupacional" className="flex flex-col items-start gap-0.5 p-2">
                    <span className="font-semibold text-foreground text-xs">Terapia Ocupacional</span>
                    <span className="text-[11px] text-muted-foreground">Integração sensorial e motora</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link to="/psicologia" className="flex flex-col items-start gap-0.5 p-2">
                    <span className="font-semibold text-foreground text-xs">Psicologia Infantil</span>
                    <span className="text-[11px] text-muted-foreground">Neurodesenvolvimento (CRP)</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer">
                  <Link to="/enfermagem" className="flex flex-col items-start gap-0.5 p-2">
                    <span className="font-semibold text-foreground text-xs">Enfermagem Pediátrica</span>
                    <span className="text-[11px] text-muted-foreground">Cuidados clínicos (COREN)</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop CTAs (Entrar Pill Button + Consultora) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 font-medium px-4 h-9 gap-1.5 text-xs shadow-2xs"
              asChild
            >
              <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare size={13} className="text-emerald-500" />
                Falar com a Consultora
              </a>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-sky-400 text-sky-600 hover:bg-sky-50 font-semibold px-6 h-9 text-xs transition-all shadow-2xs"
              asChild
            >
              <a href="https://www.opespediatra.com/login">
                Entrar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground lg:hidden rounded-lg hover:bg-muted"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/60 bg-card/95 backdrop-blur-md space-y-3">
            <div className="flex flex-col space-y-2">
              {!isHomePage && (
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
              )}
              <a
                href="#sobre"
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted"
                onClick={(e) => handleSectionClick(e, "sobre")}
              >
                Sobre
              </a>
              <a
                href="#funcionalidades"
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted"
                onClick={(e) => handleSectionClick(e, "funcionalidades")}
              >
                Recursos
              </a>
              <a
                href="#precos"
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted"
                onClick={(e) => handleSectionClick(e, "precos")}
              >
                Planos
              </a>
              <a
                href="#contato"
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted"
                onClick={(e) => handleSectionClick(e, "contato")}
              >
                Contato
              </a>

              <div className="pt-2 border-t border-border/40">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-3 block mb-1">
                  Especialidades
                </span>
                <Link
                  to="/pediatria"
                  className="px-3 py-1.5 rounded-md text-xs font-semibold text-primary hover:bg-muted flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Opes Pediatra</span>
                  <span className="text-[10px] text-muted-foreground">CRM</span>
                </Link>
                <Link
                  to="/terapia-ocupacional"
                  className="px-3 py-1.5 rounded-md text-xs font-semibold text-primary hover:bg-muted flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Terapia Ocupacional</span>
                  <span className="text-[10px] text-muted-foreground">T.O.</span>
                </Link>
                <Link
                  to="/psicologia"
                  className="px-3 py-1.5 rounded-md text-xs font-semibold text-primary hover:bg-muted flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Psicologia Infantil</span>
                  <span className="text-[10px] text-muted-foreground">CRP</span>
                </Link>
                <Link
                  to="/enfermagem"
                  className="px-3 py-1.5 rounded-md text-xs font-semibold text-primary hover:bg-muted flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Enfermagem</span>
                  <span className="text-[10px] text-muted-foreground">COREN</span>
                </Link>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full rounded-full border-sky-400 text-sky-600 hover:bg-sky-50 font-semibold h-9 text-xs"
                asChild
              >
                <a href="https://www.opespediatra.com/login">
                  Entrar
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-full border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 font-semibold h-9 text-xs"
                asChild
              >
                <a href={consultoraWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={14} className="mr-1.5 text-emerald-500" />
                  Falar com a Consultora
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
