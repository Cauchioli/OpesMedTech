import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const consultoraWhatsAppUrl =
    "https://wa.me/5511972240924?text=" +
    encodeURIComponent("Olá! Gostaria de falar com a consultora comercial sobre a Opes Medtech.");

  const links = {
    produtos: [
      { label: "Opes Pediatria (CRM)", href: "/pediatria" },
      { label: "Terapia Ocupacional (CREFITO)", href: "/terapia-ocupacional" },
      { label: "Psicologia Infantil (CRP)", href: "/psicologia" },
      { label: "Enfermagem e Fisioterapia (COREN)", href: "/enfermagem" },
      { label: "Funcionalidades da Plataforma", href: "/#funcionalidades" },
      { label: "Planos e Preços", href: "/#precos" },
      { label: "Perguntas Frequentes (FAQ)", href: "/#faq" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos e Condições de Uso", href: "/termos-de-uso" },
      { label: "Conformidade LGPD e CFM", href: "/politica-de-privacidade" },
    ],
    social: [
      {
        icon: Instagram,
        href: "https://www.instagram.com/opesmedtech/",
        label: "Instagram",
      },
      {
        icon: Facebook,
        href: "https://www.facebook.com/share/14rmHnrQFen/",
        label: "Facebook",
      },
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/company/opes-medtech/",
        label: "LinkedIn",
      },
    ],
  };

  return (
    <footer id="contato" className="bg-foreground text-primary-foreground border-t border-border/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1 space-y-3">
            <Link to="/">
              <img src={logoWhite} alt="Opes Medtech" className="h-8 mb-3" />
            </Link>
            <p className="text-primary-foreground/75 text-xs leading-relaxed">
              Desenvolvendo o ecossistema tecnológico definitivo para a saúde e o desenvolvimento infantil. Simplicidade, segurança e IA aplicada.
            </p>

            {/* Certifications */}
            <div className="pt-1 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-primary-foreground/10 text-[10px] font-semibold text-primary-foreground/80 border border-primary-foreground/15">
                LGPD Compliant
              </span>
              <span className="px-2 py-0.5 rounded bg-primary-foreground/10 text-[10px] font-semibold text-primary-foreground/80 border border-primary-foreground/15">
                HIPAA Ready
              </span>
              <span className="px-2 py-0.5 rounded bg-primary-foreground/10 text-[10px] font-semibold text-primary-foreground/80 border border-primary-foreground/15">
                SOC2 Standards
              </span>
              <span className="px-2 py-0.5 rounded bg-primary-foreground/10 text-[10px] font-semibold text-primary-foreground/80 border border-primary-foreground/15">
                Criptografia 256 bit
              </span>
            </div>
          </div>

          {/* Product and Specialties */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3 text-white">
              Soluções e Especialidades
            </h4>
            <ul className="space-y-2 text-xs">
              {links.produtos.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3 text-white">
              Institucional e Legal
            </h4>
            <ul className="space-y-2 text-xs">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3 text-white">
              Canais de Atendimento
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={consultoraWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/40 font-semibold transition-colors text-xs"
                >
                  <MessageSquare size={13} />
                  Falar com a Consultora
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511972240924"
                  className="flex items-center gap-2 text-primary-foreground/75 hover:text-white transition-colors"
                >
                  <Phone size={13} />
                  +55 (11) 97224,0924
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@opesmedtech.com.br"
                  className="flex items-center gap-2 text-primary-foreground/75 hover:text-white transition-colors"
                >
                  <Mail size={13} />
                  contato@opesmedtech.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70 leading-relaxed text-[11px]">
                <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                <span>
                  Avenida Paulista, 1106, Sala 01, andar 16, Bela Vista, São Paulo, SP
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-2.5 pt-1">
              {links.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 text-white transition-colors"
                >
                  <social.icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Opes Medtech. Todos os direitos reservados.</p>
          <p>Feito para médicos pediatras e profissionais de saúde infantil de todo o Brasil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;