"use client";

import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Achivements = () => {
  const stats = [
    { number: 19, icon: <FaBriefcase />, text: "Training Course" },
    { number: 879, icon: <FaClock />, text: "Working Hours" },
    { number: 150, icon: <ImUser />, text: "Happy Customers" },
    { number: 9, icon: <FaTrophy />, text: "International Awards" },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-16"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="flex flex-col items-center"
            >
              <div className="border border-accent/90 w-[140px] h-[140px] rounded-full p-1 mb-6">
                <div className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full">
                  <CountUp start={0} end={item.number} duration={5} />
                </div>
              </div>

              <span className="text-3xl mb-2">{item.icon}</span>
              <h4 className="h4">{item.text}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achivements;
