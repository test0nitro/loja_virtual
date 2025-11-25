import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

export const Contact = () => {
  const phoneNumber = "000000000000";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os produtos da Diléo em Limoeiro-PE."
  );

  return (
    <section id="contato" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg opacity-90 mb-12">
            Estamos prontos para atender Limoeiro e região! Fale conosco pelo
            WhatsApp e tire todas as suas dúvidas.
          </p>

          <Card className="bg-white text-foreground mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">
                      Telefone / WhatsApp
                    </p>
                    <p className="text-xl font-bold">(00) 0000-0000</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full md:w-auto text-lg px-12"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-primary-light/20 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-2">
                      Horário de Atendimento
                    </h3>
                    <p className="opacity-90">Segunda a Sexta: 8h às 18h</p>
                    <p className="opacity-90">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-light/20 border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-2">Localização</h3>
                    <p className="opacity-90">Atendemos toda a região</p>
                    <p className="opacity-90">Limoeiro-PE e Região</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
