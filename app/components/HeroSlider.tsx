"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import CustomButton from "./CustomButton";
import SwiperNavButton from "./SwiperNavButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      {[1, 2].map((_, i) => (
        <SwiperSlide key={i}>
          <div className="h-full pt-48 flex justify-center">
            <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
              <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="h1 text-center lg:text-left mb-8"
              >
                {i === 0 ? (
                  <>
                    <span>Where hard</span> work meets success
                  </>
                ) : (
                  <>
                    <span>TRAIN HARD.</span>
                    <br />
                    <span>STAY STRONG.</span>
                    <br />
                    <span>SEE RESULTS.</span>
                  </>
                )}
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-white italic text-center lg:text-left mb-16"
              >
                Push past your limits with expert-led workouts designed to build
                strength, endurance, and confidence.
              </motion.p>

              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <CustomButton
                  containerStyles="w-[196px] h-[62px]"
                  text="get started"
                />
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <SwiperNavButton
        containerStyles="flex absolute bottom-16 lg:bottom-32 right-0 lg:left-0 lg:h-[58px]
        w-full lg:max-w-[700px] z-50 justify-center lg:justify-start gap-1"
        iconStyles="text-2xl"
        btnStyles="border border-accent text-white w-[56px] h-[56px]
        flex justify-center items-center hover:bg-accent transition-all duration-300"
      />
    </Swiper>
  );
};

export default HeroSlider;
