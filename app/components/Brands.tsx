"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Brands = () => {
  const brandsLogo = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      href: "https://www.nike.com",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      href: "https://www.nike.com",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      href: "https://www.nike.com",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      href: "https://www.nike.com",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      href: "https://www.nike.com",
    },
  ];

  const brandContainerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 0.5,
        ease: "linear",
      },
    },
  };

  const brandItem = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };

  return (
    <section className="py-8" id="brands">
      <div className="container mx-auto ">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-5 py-8"
          variants={brandContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {brandsLogo.map((brand, index) => (
            <motion.div key={index} variants={brandItem}>
              <Link
                key={index}
                href={brand.href}
                target="_blank"
                className="group mx-auto"
              >
                {/* <div className="relative w-[204px] h-[106px]"> */}
                <Image
                  src={brand.src}
                  alt={`brand ${index + 1}`}
                  height={106}
                  width={204}
                  className="object-contain opacity-50 group-hover:opacity-100 transition-all duration-300"
                />
                {/* </div> */}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
