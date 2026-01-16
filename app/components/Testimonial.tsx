"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Testimonial = () => {
  const testimonialData = [
    {
      img: "/assets/trainers/trainer-1.png",
      messsage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam dolore iure ullam aperiam vel?",
      name: "Shubham pal",
    },
    {
      img: "/assets/trainers/trainer-2.png",
      messsage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam dolore iure ullam aperiam vel?",
      name: "Shubham pal",
    },
    {
      img: "/assets/trainers/trainer-3.png",
      messsage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam dolore iure ullam aperiam vel?",
      name: "Shubham pal",
    },
    {
      img: "/assets/trainers/trainer-4.png",
      messsage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam dolore iure ullam aperiam vel?",
      name: "Shubham pal",
    },
    {
      img: "/assets/trainers/trainer-5.png",
      messsage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam dolore iure ullam aperiam vel?",
      name: "Shubham pal",
    },
  ];

  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="h2 text-center"
        >
          Our testimonial
        </motion.h2>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[320px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide key={index} className="h-full">
                  <motion.div
                    variants={fadeIn("up", index * 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col justify-center items-center gap-6 text-center h-full "
                  >
                    <div className="relative w-[90px] h-[90px] rounded-full border-2 border-accent overflow-hidden">
                      <Image
                        src={person.img}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-gray-300" />
                      <p className="max-w-[380px] mb-4">{person.messsage}</p>
                      <span className="text-2xl text-accent">
                        {person.name}
                      </span>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
