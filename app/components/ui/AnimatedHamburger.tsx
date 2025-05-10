"use client";

import { motion } from "framer-motion";

interface AnimatedHamburgerProps {
  isOpen: boolean;
}

export default function AnimatedHamburger({ isOpen }: AnimatedHamburgerProps) {
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const centerLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <div className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer">
      <motion.span
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={topLineVariants}
        transition={{ duration: 0.3 }}
        className="w-7 h-[2px] bg-gray-700 rounded-full origin-center mb-[6px]"
      />
      <motion.span
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={centerLineVariants}
        transition={{ duration: 0.3 }}
        className="w-7 h-[2px] bg-gray-700 rounded-full origin-center mb-[6px]"
      />
      <motion.span
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={bottomLineVariants}
        transition={{ duration: 0.3 }}
        className="w-7 h-[2px] bg-gray-700 rounded-full origin-center"
      />
    </div>
  );
}
