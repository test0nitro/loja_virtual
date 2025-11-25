import { CheckCircle, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const features = [
    "Produtos de alta qualidade",
    "Preços justos e competitivos",
    "Atendimento rápido e personalizado",
    "Entrega ágil em Limoeiro e região",
    "Garantia em todos os produtos",
    "Consultoria especializada",
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre a Diléo
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground text-center mb-8">
              Somos uma loja que oferece produtos variados de qualidade, 
              comprometida em proporcionar praticidade, confiança e o melhor atendimento 
              para nossos clientes em Limoeiro-PE e região.
            </p>
          </div>

          {/* Nossa Missão Section */}
          <Card className="mb-12 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Nossa Missão</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nossa missão é oferecer produtos de qualidade com um atendimento excelente, 
                    garantindo praticidade e confiança para Limoeiro e região.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-primary font-semibold">
              Não fique só desejando. Acelere seus sonhos — conquiste com a gente!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
