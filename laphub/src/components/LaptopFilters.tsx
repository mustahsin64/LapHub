"use client";

import { useLaptopFilter } from '@/context/LaptopFilterContext';
import React, { ReactNode, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type FiltersProps = {
  children: ReactNode;
};

export const LaptopFilters = ({ children }: FiltersProps) => {
  return (
    <div className="mb-6 flex justify-end">
      <div className="flex gap-4 w-full">
        {children}
      </div>
    </div>
  );
};



// 🔍 Search Filter
export function Search() {
  const { searchTerm, setSearchTerm } = useLaptopFilter();
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500);
    return () => clearTimeout(handler);
  }, [inputValue, setSearchTerm]);

  return (
    <div className="flex flex-col flex-grow space-y-1.5 ">
      {/* <Label htmlFor="search">Search</Label> */}
      <Input
      className='bg-gray-50 focus:text-blue-600'
        id="search"
        placeholder="Search by name or brand..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}


// 🏷️ Brand Filter
export function Brand() {
  const { laptops, selectedBrand, setSelectedBrand } = useLaptopFilter();

  const brands = Array.from(new Set(laptops.map((laptop) => laptop.brand))).sort();

  return (
    <div className="flex flex-col space-y-1.5">
      {/* <Label htmlFor="brand">Filter by Brand</Label> */}
      <Select
      
        onValueChange={(value) =>
          setSelectedBrand(value === "all" ? null : value)
        }
        value={selectedBrand ?? "all"}
      >
        <SelectTrigger id="brand" className="text-blue-600 bg-gray-50">
          <SelectValue placeholder="Select a brand" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Brand</SelectItem>
          {brands.map((brand) => (
            <SelectItem key={brand} value={brand}>
              {brand}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function LaptopLabel() {
  const { laptops, selectedLabel, setSelectedLabel } = useLaptopFilter();

  const labels = Array.from(new Set(laptops.map((laptop) => laptop.label))).sort();

  return (
    <div className="flex flex-col space-y-1.5">
      {/* <Label htmlFor="brand">Filter by Brand</Label> */}
      <Select
      
        onValueChange={(value) =>
          setSelectedLabel(value === "all" ? null : value)
        }
        value={selectedLabel ?? "all"}
      >
        <SelectTrigger id="brand" className="text-blue-600 bg-gray-50">
          <SelectValue placeholder="Select a brand" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Label</SelectItem>
          {labels.map((label) => (
            <SelectItem key={label} value={label}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

