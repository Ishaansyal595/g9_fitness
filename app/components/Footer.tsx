"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import CustomButton from "./CustomButton";
import { motion, Variants } from "framer-motion";

const Footer = () => {
  const footerContainerVariants: Variants = {
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

  const footerItem: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto mb-24 ">
        <motion.div
          variants={footerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {/* Info */}
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <h3 className="italic text-white text-2xl lg:text-4xl">
                Fitness <span className="text-accent">Gym</span>
              </h3>
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam natus non ipsum sunt, nihil beatae?
            </p>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkedAlt className="text-xl text-accent" />
                <span>Rishi Nagar, Ludhiana, Punjab</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>+91 9876543210</span>
              </li>
              <li>
                <Link href={"#"} className="flex items-center gap-4">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>info@g9fitnessgym.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Blog */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent">Recent Blog posts </h4>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href={"#"} className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to build a perfect workout plan
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  january 10, 2026
                </p>
              </Link>
            </div>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href={"#"} className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to build a perfect workout plan
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  january 10, 2026
                </p>
              </Link>
            </div>
            <div className=" flex flex-col gap-3 pb-3 mb-4">
              <Link href={"#"} className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to build a perfect workout plan
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  january 10, 2026
                </p>
              </Link>
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div variants={footerItem}>
            <h4 className=" h4 text-accent mb-4 ">Gallery</h4>
            {/* Gallery images */}
            <div className="flex flex-wrap gap-2">
              <Link href={"#"}>
                <Image
                  src={"/assets/blog.jpg"}
                  alt="gallery image 1"
                  height={100}
                  width={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/blog.jpg"}
                  alt="gallery image 1"
                  height={100}
                  width={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/blog.jpg"}
                  alt="gallery image 1"
                  height={100}
                  width={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/blog.jpg"}
                  alt="gallery image 1"
                  height={100}
                  width={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/blog.jpg"}
                  alt="gallery image 1"
                  height={100}
                  width={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/blog.jpg"}
                  alt="gallery image 1"
                  height={100}
                  width={100}
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/assets/blog.jpg"}
                  alt="gallery image 1"
                  height={100}
                  width={100}
                />
              </Link>
            </div>
          </motion.div>

          {/* Newslater */}
          <motion.div variants={footerItem} className="">
            <h4 className="text-accent h4 mb-4">Newslater</h4>

            <div className="space-y-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                velit, ea atque debitis alias unde molestiae quaerat facere
                reiciendis error itaque deleniti magnam neque, quas similique
                quos commodi cum voluptate.
              </p>
              <form action="">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[50px] outline-none px-4 text-primary-300"
                />
                <CustomButton containerStyles="h-[50px] px-8" text="send" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-12">
        <div className="container mx-auto h-full ">
          <div className="flex items-center justify-between h-full">
            <span className="text-gray-400">
              &copy; copyright 2026 G9 Fitness Gym. All rights reserved.
            </span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href={"#"}
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-white hover:text-accent transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-white hover:text-accent transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
