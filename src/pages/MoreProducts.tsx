import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  description: string;
}

const categories: Category[] = [
  {
    id: "eletronicos",
    name: "Eletrônicos",
    description: "Smartphones, tablets, acessórios e mais",
  },
  {
    id: "eletrodomesticos",
    name: "Eletrodomésticos",
    description: "Para sua casa e cozinha",
  },
  {
    id: "moda",
    name: "Moda e Acessórios",
    description: "Bolsas, relógios e acessórios",
  },
  {
    id: "decoracao",
    name: "Decoração",
    description: "Itens para casa e ambientes",
  },
  {
    id: "beleza",
    name: "Beleza e Cuidados",
    description: "Produtos de beleza e cuidados pessoais",
  },
  {
    id: "esportes",
    name: "Esportes e Lazer",
    description: "Equipamentos e acessórios esportivos",
  },
  {
    id: "ferramentas",
    name: "Ferramentas",
    description: "Ferramentas manuais e elétricas",
  },
  {
    id: "automotivo",
    name: "Automotivo",
    description: "Acessórios e peças para veículos",
  },
  {
    id: "papelaria",
    name: "Papelaria",
    description: "Material escolar e escritório",
  },
  {
    id: "brinquedos",
    name: "Brinquedos",
    description: "Brinquedos e jogos para todas as idades",
  },
  {
    id: "pets",
    name: "Pet Shop",
    description: "Produtos para seus animais de estimação",
  },
  {
    id: "jardim",
    name: "Casa e Jardim",
    description: "Itens para jardim e área externa",
  },
];

export default function MoreProducts() {
  const phoneNumber = "000000000000";

  const handleCategoryClick = (category: Category) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de ver produtos da categoria: ${category.name}. Pode me ajudar?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="mb-12">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Home
              </Button>
            </Link>
            
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Mais Produtos
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore nossas diversas categorias de produtos. Clique em uma categoria para ver mais detalhes e fazer seu pedido via WhatsApp!
              </p>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-border hover:border-accent cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <CardHeader className="bg-gradient-to-br from-accent/10 to-transparent">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Ver Produtos
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Não encontrou o que procura?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco! Temos muitos outros produtos disponíveis.
            </p>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Olá! Gostaria de informações sobre outros produtos disponíveis."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg">
                Fale Conosco no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
