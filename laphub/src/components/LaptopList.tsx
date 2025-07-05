// LaptopList.tsx
"use client"; // ✅ Required when using Framer Motion or browser hooks

import React from "react";
import { motion } from "framer-motion";
import LaptopCard from "@/components/LaptopCard";
import { useLaptopFilter } from "@/context/LaptopFilterContext";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const LaptopList = () => {
  const { filteredLaptops } = useLaptopFilter();
  

  return (
    <div>
      {filteredLaptops.length === 0 ? (
        <p className="text-center text-gray-400">No laptops available at the moment.</p>
      ) : (
        <>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          
          {filteredLaptops.map((laptop) => (
            <LaptopCard key={laptop.id} {...laptop} />
          ))}
        </motion.div>
        </>
      )}
    </div>
  );
};

export default LaptopList;
