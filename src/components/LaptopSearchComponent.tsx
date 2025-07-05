"use client"
import { Laptop } from '@/app/type';
import React, { useEffect, useState } from 'react'

type Props = {
  laptops: Laptop[];
  setFilteredLaptops : (value: Laptop[]) => void;
};

const LaptopSearchComponent: React.FC<Props> = ({ laptops, setFilteredLaptops }) => {
    const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search term (300ms delay)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    // Cleanup timeout on input change
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Filtered laptops (case insensitive)
  useEffect(() => {
    const filtered = laptops.filter((laptop) =>
      `${laptop.name} ${laptop.brand}`
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    );

    setFilteredLaptops(filtered);
  }, [debouncedSearch, laptops, setFilteredLaptops]);

  return (
    <>
      <input
        type="text"
        placeholder="Search by name or brand..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex mx-auto w-xl p-2 mb-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </>
  )
}

export default LaptopSearchComponent
