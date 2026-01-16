"use client";

import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";
import MembershipSlider from "./MembershipSlider";

const Membership = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.2 }}
      className="py-8 lg:py-0 lg:h-[95vh] bg-membership bg-cover bg-center bg-no-repeat relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10"
      id="prices"
    >
      <div className="container mx-auto px-0 h-full flex flex-col xl:pt-24 relative z-20">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="h2 text-white mb-8 text-center"
        >
          membership
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="w-[90vw] md:w-full mx-auto"
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Membership;
