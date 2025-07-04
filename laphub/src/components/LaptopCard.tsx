"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  specification: string | null;
  releaseYear: number;
  label: string;
  brand: string;
  likeCount: number;
  createdAt: string;
  newRelease: boolean;
};

export default function LaptopCard({
  name,
  brand,
  price,
  imageUrl,
  description,
  specification,
  releaseYear,
  label,
  likeCount,
  createdAt,
  newRelease,
}: Props) {
  // Intersection Observer hook to detect when card enters viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
  ref={ref}
  variants={{
    hidden: { opacity: 0, y: 70 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }}
  initial="hidden"
  animate={inView ? "show" : "hidden"} // animate only when in view
>

      <Card
      role="article"
        className="
          w-full
          shadow-md 
          hover:shadow-lg 
          transition-shadow 
          transform 
          hover:scale-105 
          duration-300 
          ease-in-out
          cursor-pointer
        "
        aria-label={`Laptop: ${name} by ${brand}, $${price}`}
      >
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{name}</span>
            {newRelease && (
              <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                New
              </span>
            )}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{brand} • {releaseYear}</p>
        </CardHeader>

        <CardContent>
          <div className="w-full h-48 relative mb-4">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>

          <p className="text-sm text-muted-foreground mb-2">{description}</p>

          {specification && (
            <p className="text-sm text-gray-500 mb-2">
              <strong>Specs:</strong> {specification}
            </p>
          )}

          <div className="flex justify-between items-center mt-4">
            <span className="text-primary font-semibold text-lg">${price.toFixed(2)}</span>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">{label}</span>
          </div>

          <div className="text-xs text-gray-400 mt-2">
  ❤️ {likeCount} • Added on {new Date(createdAt).toISOString().slice(0, 10)}
</div>

        </CardContent>
      </Card>
    </motion.div>
  );
}
