import LaptopCard from "@/components/LaptopCard";

const url = "https://laphub-backend.onrender.com/api/laptops";
const driveUrl = "https://drive.google.com/uc?export=download&id=1AKVuz1MAdh-y7TZW07oOACIbSb_uR7ee";

async function fetchLaptops() {
  const res = await fetch(
    url,
    { cache: "no-store" } // optional: disable caching
  );
  if (!res.ok) throw new Error("Failed to fetch laptops");
  return res.json();
}

export default async function Home() {
  const laptops = await fetchLaptops();

  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Laptops</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {laptops.map((laptop: any) => (
          <LaptopCard key={laptop.id} {...laptop} />
        ))}
      </div>
    </main>
  );
}
