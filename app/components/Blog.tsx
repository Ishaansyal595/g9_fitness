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
  ];

  return (
    <section className="text-white py-24 bg-primary-300" id="blog">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-8">Blog</h2>
        <div>
          <Swiper>
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row gap-10 ">
                  {/* Blog Image */}
                  <div className="relative w-[320px] h-[266px]">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      fill
                      className="mb-6"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="">{blog.date}</p>
                    <Link href={blog.href}>
                      <h5>{blog.title}</h5>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
