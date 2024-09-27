import Link from "next/link";
import React from "react";
import { FiX } from "react-icons/fi"; // Import the close icon

export const navItemsData = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Courses",
    link: "/courses",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 5,
    title: "Policy",
    link: "/policy",
  },
  {
    id: 6,
    title: "FAQ",
    link: "/faq",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
  isMenuOpen: boolean;
  handleCloseMenu: () => void; // Add a function prop to handle menu close
};

const NavItems: React.FC<Props> = ({
  activeItem,
  isMobile,
  isMenuOpen,
  handleCloseMenu,
}) => {
  return (
    <>
      {/* Desktop View */}
      {!isMobile && (
        <div className="hidden md:flex space-x-6">
          {navItemsData.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`nav-link ${activeItem === item.id ? "active" : ""}`}
              passHref
            >
              <span
                className={`relative text-[18px] px-6 font-poppins font-[400] cursor-pointer 
                  ${
                    activeItem === item.id
                      ? "dark:text-[#37a39a] text-[orange] border-b-4 border-[orange]" // Active state with border
                      : "dark:text-white text-black border-b-4 border-transparent"
                  } 
                  hover:border-[cimsp-orange] transition-all duration-300`} // Hover effect for border color change
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* Mobile View */}
      {/* Mobile Sidebar Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed top-0 right-0 w-[75%] h-full bg-white dark:bg-gray-800 shadow-lg z-50 transition-transform duration-300 transform translate-x-0">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={handleCloseMenu}
              className="text-black dark:text-white"
            >
              <FiX size={28} />
            </button>
          </div>

          {/* Nav Items rendered vertically */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {navItemsData &&
              navItemsData.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  onClick={handleCloseMenu} // Close menu on link click
                  className={`nav-link ${
                    activeItem === item.id ? "border-b-2 border-orange-500" : ""
                  }`}
                  passHref
                >
                  <span
                    className={`${
                      activeItem === item.id
                        ? "dark:text-[#37a39a] text-orange-500"
                        : "dark:text-white text-black"
                    } hover:border-b-2 hover:border-orange-500 text-[18px] px-6 font-poppins font-[400] cursor-pointer`}
                  >
                    {item.title}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavItems;
