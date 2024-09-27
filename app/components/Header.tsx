"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavItems from "../utils/NavItems";
import { FiMenu, FiX } from "react-icons/fi"; // Import the burger and close icons
import useMobileDetection from "../utils/useMobileDetection";
import { usePathname } from "next/navigation"; // Use `usePathname` instead of `useRouter`

type Props = {
  activeItem: number;
};

const Header: React.FC<Props> = ({ activeItem }) => {
  const [active, setActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls the sidebar visibility
  const isMobile = useMobileDetection();
  const pathname = usePathname(); // Use `usePathname` to get the current path instead of `useRouter`

  // Toggle mobile menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check scroll position to set active header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Here you can use pathname to determine which link is active
  const isActive = (link: string) => pathname === link;
  // Function to close the menu
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header>
      <div className="w-full relative">
        <div
          className={`${
            active
              ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-300"
              : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
          }`}
        >
          <div className="w-[95%] 800px:w-[92%] h-full m-auto flex justify-between items-center py-2">
            <div className="w-full h-[80px] flex items-center justify-between p-3">
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="text-[25px] font-poppins font-[500] text-black dark:text-white"
                >
                  Elearning Logo
                </Link>
              </div>

              {/* Burger icon button for mobile */}
              <button
                className="md:hidden text-black dark:text-white focus:outline-none"
                onClick={handleMenuToggle}
              >
                {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>

              {/* Render NavItems and pass isMenuOpen */}
              <NavItems
                activeItem={activeItem}
                isMobile={isMobile}
                isMenuOpen={isMenuOpen}
                handleCloseMenu={handleCloseMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
