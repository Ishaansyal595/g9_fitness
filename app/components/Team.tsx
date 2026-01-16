"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Team = () => {
  const trainerData = [
    {
      image: "/assets/trainers/trainer-1.png",
      name: "David Williams",
      role: "Body Builder Coach",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae est maxime, omnis commodi blanditiis molestias distinctio quas sint repudiandae?",
      social: [
        { icon: <FaFacebook />, href: "https://facebook.com" },
        { icon: <FaTwitter />, href: "https://twitter.com" },
        { icon: <FaYoutube />, href: "https://youtube.com" },
      ],
    },
    {
      image: "/assets/trainers/trainer-2.png",
      name: "Rosy Rivera",
      role: "Body Builder Coach",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae est maxime, omnis commodi blanditiis molestias distinctio quas sint repudiandae?",
      social: [
        { icon: <FaFacebook />, href: "https://facebook.com" },
        { icon: <FaTwitter />, href: "https://twitter.com" },
        { icon: <FaYoutube />, href: "https://youtube.com" },
      ],
    },
    {
      image: "/assets/trainers/trainer-3.png",
      name: "Matt Stone",
      role: "Body Builder Coach",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae est maxime, omnis commodi blanditiis molestias distinctio quas sint repudiandae?",
      social: [
        { icon: <FaFacebook />, href: "https://facebook.com" },
        { icon: <FaTwitter />, href: "https://twitter.com" },
        { icon: <FaYoutube />, href: "https://youtube.com" },
      ],
    },
    {
      image: "/assets/trainers/trainer-4.png",
      name: "Sofia Lauren",
      role: "Body Builder Coach",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae est maxime, omnis commodi blanditiis molestias distinctio quas sint repudiandae?",
      social: [
        { icon: <FaFacebook />, href: "https://facebook.com" },
        { icon: <FaTwitter />, href: "https://twitter.com" },
        { icon: <FaYoutube />, href: "https://youtube.com" },
      ],
    },
  ];

  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our Trainers
        </motion.h2>

        {/* trainer grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerData.map((item, index) => {
            return (
              <motion.div
                variants={fadeIn("up", index * 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                key={index}
                className="group flex flex-col items-center space-y-2 text-center overflow-hidden"
              >
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-300 "
                  />
                </div>

                {/* Name */}
                <h4 className="h4">{item.name}</h4>

                {/* Role */}
                <p className=" uppercase tracking-[3px]">{item.role}</p>

                {/* Description */}
                <p className=" mb-6 w-[96%]">{item.description}</p>

                {/* Social */}
                <div className="flex justify-center items-center w-full gap-12 ">
                  {item.social.map((item, index) => {
                    return (
                      <div>
                        <Link
                          href={item.href}
                          className="hover:text-accent transition-all"
                          key={index}
                        >
                          <span className="text-lg">{item.icon}</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* btn */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="w-[196px] h-[62px]"
            text="See all trainers"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
