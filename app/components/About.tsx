"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achivements from "./Achivements";

const About = () => {
  const featured = [
    {
      icon: <FaUsers />,
      title: "award-winning trainers",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fugit earum quae aut saepe.",
    },
    {
      icon: <IoIosPricetags />,
      title: "excellent pricing",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fugit earum quae aut saepe.",
    },
    {
      icon: <FaDumbbell />,
      title: "modern equipments",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fugit earum quae aut saepe.",
    },
  ];

  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="h2 text-center"
          >
            About Us
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            fugit earum quae aut saepe.
          </motion.p>
        </div>

        {/* Featured */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 mb-16"
        >
          {featured.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center border border-accent rounded-lg
              hover:-translate-y-5 hover:shadow-2xl hover:bg-accent/90
              transition-all duration-500 ease-out transform-gpu
              px-10 h-[400px] text-center"
            >
              <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center mb-6">
                {feature.icon}
              </div>

              <h4 className="h4 text-accent group-hover:text-white transition-all duration-300 mb-3">
                {feature.title}
              </h4>

              <p className="group-hover:text-gray-200 transition-all duration-300">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Achivements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
