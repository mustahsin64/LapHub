import { Laptop } from "./type";
import LaptopList from "@/components/LaptopList";
import Navbar from "@/components/Navbar";

const url = "https://laphub-backend.onrender.com/api/laptops";
//const driveUrl = "https://drive.google.com/uc?export=download&id=1AKVuz1MAdh-y7TZW07oOACIbSb_uR7ee";

import { promises as fs } from "fs";
import path from "path";
import { LaptopFilterProvider } from "@/context/LaptopFilterContext";

import { LaptopFilters, Search, Brand, LaptopLabel } from "@/components/LaptopFilters";


export async function fetchLaptopsFromFile(): Promise<Laptop[]> {
  try {
    const filePath = path.join(process.cwd(), "src/app", "laptops.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    return data as Laptop[];
  } catch (error) {
    console.error("Error reading laptops.json:", error);
    return [];
  }
}

async function fetchLaptopsFromServer(): Promise<Laptop[]> {
  try {
    const res = await fetch(url, {
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
  const laptops: Laptop[] = await fetchLaptopsFromServer();

  return (
    <>
      <Navbar />
      <LaptopFilterProvider laptops={laptops}>
        <main className="min-h-screen p-6 bg-gray-800 dark:bg-gray-900">
          <LaptopFilters>
            <Search/>
            <Brand/>
            <LaptopLabel/>
          </LaptopFilters>

          <LaptopList />
        </main>
      </LaptopFilterProvider>
    </>
  );
}
