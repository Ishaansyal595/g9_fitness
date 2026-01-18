"use client";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import SwiperNavButton from "./SwiperNavButton";

const Blog = () => {
  const blogData = [
    {
      img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
      date: "January 16, 2026",
      title: "Maintain a Perfect Body Structure After Workout",
      href: "/blog/perfect-body-structure",
    },
    {
      img: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg",
      date: "February 02, 2026",
      title: "Top 5 Nutrition Tips for Faster Muscle Recovery",
      href: "/blog/nutrition-tips-muscle-recovery",
    },
    {
      img: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg",
      date: "February 02, 2026",
      title: "Top 5 Nutrition Tips for Faster Muscle Recovery",
      href: "/blog/nutrition-tips-muscle-recovery",
    },
    {
      img: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg",
      date: "February 02, 2026",
      title: "Top 5 Nutrition Tips for Faster Muscle Recovery",
      href: "/blog/nutrition-tips-muscle-recovery",
    },
    {
      img: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg",
      date: "February 02, 2026",
      title: "Top 5 Nutrition Tips for Faster Muscle Recovery",
      href: "/blog/nutrition-tips-muscle-recovery",
    },
    {
      img: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg",
      date: "February 02, 2026",
      title: "Top 5 Nutrition Tips for Faster Muscle Recovery",
      href: "/blog/nutrition-tips-muscle-recovery",
    },
  ];

  return (
    <section className="text-white py-24 bg-primary-300" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Blog
        </motion.h2>
        {/* Swiper container to add animation */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8 relative"
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={fadeIn("up", index * 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col justify-start h-full max-w-[320px] mx-auto gap-10 "
                >
                  {/* Blog Image */}
                  <div className="relative w-[320px] h-[266px]">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      fill
                      className="mb-6"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center md:text-start md:items-start">
                    <p className="max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                      {blog.date}
                    </p>
                    <Link
                      className="hover:text-accent  transition-all duration-300"
                      href={blog.href}
                    >
                      <h5 className="h5">{blog.title}</h5>
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}

            {/* Swiper navigation buttons */}
            <SwiperNavButton
              containerStyles="absolute left-0 right-0 w-full max-w-[370px] bottom-[16rem] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto flex justify-between gap-1 z-50"
              btnStyles="bg-accent/80 text-white w-[56px] h-[56px] flex justify-center items-center"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>

        {/* Custom button to view all blogs */}
        <div className="w-full flex justify-center">
          <CustomButton
            containerStyles="block w-[196px] h-[62px]"
            text="View All"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
