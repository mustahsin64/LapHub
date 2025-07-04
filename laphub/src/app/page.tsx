import LaptopCard from "@/components/LaptopCard";
import { Laptop } from "./type";

const url = "https://laphub-backend.onrender.com/api/laptops";
const driveUrl = "https://drive.google.com/uc?export=download&id=1AKVuz1MAdh-y7TZW07oOACIbSb_uR7ee";

async function fetchLaptops(): Promise<Laptop[]> {
  try {
    const res = await fetch(driveUrl, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("Failed to fetch laptops: ", res.status);
      return [];
    }
    const data = await res.json();
    return data as Laptop[];
  } catch (error) {
    console.error("Error fetching laptops:", error);
    return [];
  }
}

export default async function Home() {
  const laptops: Laptop[] = await fetchLaptops();

  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Laptops</h1>

      {laptops.length === 0 ? (
        <p className="text-center text-gray-400">No laptops available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laptops.map((laptop) => (
            <LaptopCard key={laptop.id} {...laptop} />
          ))}
        </div>
      )}
    </main>
  );
}

