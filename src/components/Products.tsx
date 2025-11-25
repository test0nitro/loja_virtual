import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import appliances from "@/assets/products/appliances.jpg";
import electronics from "@/assets/products/electronics.jpg";
import fashion from "@/assets/products/fashion.jpg";
import decor from "@/assets/products/decor.jpg";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Kit de Cozinha Premium",
    description: "Liquidificador potente e acessórios modernos para sua cozinha",
    price: "R$ 399,90",
    image: appliances,
    category: "Eletrodomésticos",
  },
  {
    id: 2,
    name: "Kit Tech Completo",
    description: "Smartphone e acessórios eletrônicos de última geração",
    price: "R$ 899,90",
    image: electronics,
    category: "Eletrônicos",
  },
  {
    id: 3,
    name: "Coleção Fashion",
    description: "Bolsas e acessórios estilosos para o dia a dia",
    price: "R$ 279,90",
    image: fashion,
    category: "Moda",
  },
  {
    id: 4,
    name: "Decoração Moderna",
    description: "Itens decorativos para transformar seu ambiente",
    price: "R$ 189,90",
    image: decor,
    category: "Decoração",
  },
];

export const Products = () => {
  const phoneNumber = "000000000000";

  const handleBuyClick = (product: Product) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto: ${product.name} (${product.price}). Gostaria de mais informações!`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="produtos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Produtos de qualidade para facilitar seu dia a dia e realizar seus sonhos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-border"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-primary">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => handleBuyClick(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Quero este!
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura? Confira nosso catálogo completo!
          </p>
          <Link to="/mais-produtos">
            <Button variant="outline" size="lg">
              Ver Mais Produtos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
