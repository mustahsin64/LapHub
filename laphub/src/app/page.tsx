import LaptopCard from "@/components/LaptopCard";
import { Laptop } from "./type";
import LaptopList from "@/components/LaptopList";
import Navbar from "@/components/Navbar";



const url = "https://laphub-backend.onrender.com/api/laptops";
const driveUrl = "https://drive.google.com/uc?export=download&id=1AKVuz1MAdh-y7TZW07oOACIbSb_uR7ee";

import { promises as fs } from 'fs';
import path from 'path';

export async function fetchLaptops(): Promise<Laptop[]> {
  try {
    const filePath = path.join(process.cwd(), 'src/app','laptops.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return data as Laptop[];
  } catch (error) {
    console.error("Error reading laptops.json:", error);
    return [];
  }
}

async function fetchLaptops1(): Promise<Laptop[]> {
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
    <>
    <Navbar/>
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Laptops</h1>

      <LaptopList laptops={laptops}/>
    </main>
    </>
  );
}

