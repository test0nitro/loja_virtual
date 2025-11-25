import { Facebook, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Diléo" className="h-12 w-auto mb-4" />
            <p className="text-primary-foreground/80 text-sm">
              Sua loja de confiança para produtos variados. 
              Qualidade e atendimento excepcional para Limoeiro e região.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Diléo - Produtos Variados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
