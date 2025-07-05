"use client";

import { Laptop } from '@/app/type';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'



interface LaptopFilterContextType {
  laptops: Laptop[];
  filteredLaptops: Laptop[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
  selectedLabel: string | null;
  setSelectedLabel: (brand: string | null) => void;
  // Add more filters as needed
}

const LaptopFilterContext = createContext<LaptopFilterContextType | undefined>(undefined);

interface Props{
    laptops: Laptop[];
    children: ReactNode;
}
export function LaptopFilterProvider({laptops, children}: Props) {
  const [searchTerm,setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [filteredLaptops, setFilteredLaptops] = useState<Laptop[]>(laptops);

  useEffect(() => {
    let filtered = laptops;

    // Filter by search term
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((laptop) =>
        `${laptop.name} ${laptop.brand}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // Filter by selected brand
    if (selectedBrand) {
      filtered = filtered.filter(
        (laptop) => laptop.brand.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    if (selectedLabel) {
      filtered = filtered.filter(
        (laptop) => laptop.label.toLowerCase() === selectedLabel.toLowerCase()
      );
    }

    

    setFilteredLaptops(filtered);
  }, [searchTerm, selectedBrand, selectedLabel, laptops]);

    return (
    <LaptopFilterContext.Provider value={{
        laptops,
        filteredLaptops,
        searchTerm,
        setSearchTerm,
        selectedBrand,
        setSelectedBrand,
        selectedLabel,
        setSelectedLabel,
    }}>
        {children}
    </LaptopFilterContext.Provider>
  )
}

export function useLaptopFilter() {
    const context = useContext(LaptopFilterContext);
    if(!context){
        throw new Error("useLaptopFilter must be used within a LaptopFilterProvider");
    }
    return context;
}

