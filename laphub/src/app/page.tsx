// src/app/page.tsx
import { laptops } from "@/data/laptops";
import LaptopCard from "@/components/LaptopCard";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Laptops</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {laptops.map((laptop) => (
          <LaptopCard key={laptop.id} {...laptop} />
        ))}
      </div>
    </main>
  );
}
