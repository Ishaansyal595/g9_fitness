"use client";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    // Add scroll event
    window.addEventListener("scroll", handleScroll);

    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(headerActive);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "lg:h-[124px]"
      } fixed left-0 right-0 top-0 max-w-[1920px] w-full bg-primary-200 h-[100px] transition-all z-50 py-6 lg:pt-0 `}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="#">
          <h3 className="italic text-white text-2xl lg:text-4xl">
            Fitness <span className="text-accent">Gym</span>
          </h3>
        </Link>

        {/* Mobile nav - hidden on large devices */}
        <MobileNav
          containerStyles={`lg:hidden text-white flex flex-col gap-8 text-center bg-primary-200 fixed left-0 w-full top-[100px]
  ${
    openMenu
      ? "translate-y-0 opacity-100 pointer-events-auto"
      : "-translate-y-6 opacity-0 pointer-events-none"
  }
  transition-all duration-300 ease-in-out pt-8 pb-10 border-t border-white/10`}
        />

        {/* Desktop nav - hidden on small devices */}
        <Nav containerStyles="py-12 text-white flex gap-4 hidden lg:flex transition-all text-base uppercase font-medium" />

        {/* Hide/Open menu button */}
        <div className="  flex justify-center items-center gap-4 ">
          {/* Login/Register button */}
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-sm uppercase font-medium">
              Login
            </button>
            <button className="hover:text-accent transition-all text-sm uppercase font-medium">
              Register
            </button>
          </div>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="border border-white rounded-lg p-2 lg:hidden"
          >
            <MdMenu className="text-white text-lg" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
