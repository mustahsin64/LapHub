import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  name: string;
  brand: string;
  price: string;
  image: string;
  description: string;
};

export default function LaptopCard({ name, brand, price, image, description }: Props) {
  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{brand}</p>
      </CardHeader>
      <CardContent>
        <div className="w-full h-48 relative mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <p className="text-primary font-semibold text-lg">{price}</p>
      </CardContent>
    </Card>
  );
}
