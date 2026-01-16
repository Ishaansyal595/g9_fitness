"use client";

import React from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import CustomButton from "./CustomButton";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

const MembershipSlider = () => {
  // membership data
  const membershipData = [
    {
      title: "Standard",
      price: "3500",
      benefits: [
        { icon: <FaCheck />, text: "3 Months Membership" },
        { icon: <FaCheck />, text: "Access to basic gym equipment" },
        { icon: <MdClose />, text: "Access to all gym equipment" },
        { icon: <MdClose />, text: "Personal trainer sessions" },
        { icon: <MdClose />, text: "Diet & nutrition consultation" },
        { icon: <MdClose />, text: "Priority support" },
      ],
    },
    {
      title: "Premium",
      price: "6500",
      benefits: [
        { icon: <FaCheck />, text: "6 Months Membership" },
        { icon: <FaCheck />, text: "Access to basic gym equipment" },
        { icon: <FaCheck />, text: "Access to all gym equipment" },
        { icon: <FaCheck />, text: "2 Personal trainer sessions" },
        { icon: <FaCheck />, text: "Diet & nutrition consultation" },
        { icon: <MdClose />, text: "Priority support" },
      ],
    },
    {
      title: "Elite",
      price: "11000",
      benefits: [
        { icon: <FaCheck />, text: "12 Months Membership" },
        { icon: <FaCheck />, text: "Access to basic gym equipment" },
        { icon: <FaCheck />, text: "Access to all gym equipment" },
        { icon: <FaCheck />, text: "Weekly personal trainer sessions" },
        { icon: <FaCheck />, text: "Custom diet & workout plan" },
        { icon: <FaCheck />, text: "Priority support" },
      ],
    },
  ];
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
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
      className="min-h-[680px]"
    >
      {membershipData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full  max-w-sm xl:max-w-none mx-auto text-gray-200">
            <div className="py-5 px-[60px] border-b border-accent">
              <h4 className="h4 ">{data.title}</h4>
            </div>

            {/* benefits */}
            <div className="w-full py-[30px] px-[60px]">
              <ul className="flex flex-col gap-5 mb-7">
                {data.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-5 ">
                    <span className="text-accent text-lg">{benefit.icon}</span>
                    {benefit.text}
                  </li>
                ))}
              </ul>
              <p className="flex items-center text-accent mb-8 gap-1">
                <sup className="text-4xl">₹</sup>
                <strong className="text-6xl">{data.price}</strong>
                <em className="self-end text-2xl">/month</em>
              </p>
              <CustomButton
                containerStyles="w-[196px] h-[62px]"
                text="Buy Now"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembershipSlider;
