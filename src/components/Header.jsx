import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

import { logo } from "../assets/img";
import MobileMenu from "./MobileMenu";

const Menu = [
  {
    id: 1,
    title: "Shop",
    link: "#",
  },
  {
    id: 2,
    title: "Men",
    link: "#",
  },
  {
    id: 3,
    title: "Women",
    link: "#",
  },
  {
    id: 4,
    title: "Combos",
    link: "#",
  },
  {
    id: 5,
    title: "Joggers",
    link: "#",
  },
];

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <header>
      <div className="container">
        <div className="flex justify-between gap-12 items-center h-[108px]">
          <div className="logo">
            <img src={logo} alt="Eupheria" />
          </div>
          <nav className="hidden md:flex">
            <ul className="nav-menu flex gap-8 font-caustenmedium text-lg text-secondary">
              {Menu.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative hidden md:flex">
            <input
              type="text"
              placeholder="Search"
              className="h-[44px] w-[265px] bg-grayBG py-4 px-12 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 delay-75"
            />
            <CiSearch className="absolute top-3 text-lg text-secondary left-3" />
          </div>
          <div className="hidden md:flex gap-4 text-secondary text-lg ">
            <button className="bg-grayBG p-3 rounded-md hover:bg-primary hover:text-white transition-all duration-200 delay-75">
              <AiOutlineHeart />
            </button>
            <button className="bg-grayBG p-3 rounded-md hover:bg-primary hover:text-white transition-all duration-200 delay-75">
              <AiOutlineUser />
            </button>
            <button className="bg-grayBG p-3 rounded-md hover:bg-primary hover:text-white transition-all duration-200 delay-75">
              <AiOutlineShoppingCart />
            </button>
          </div>
          <button onClick={toggleMobileMenu}>
            <BsGridFill className="flex text-secondary text-lg md:hidden hover:text-primary transition-colors duration-200" />
          </button>

          {/* Mobile Menu  */}
          <MobileMenu
            Menu={Menu}
            toggleMobileMenu={toggleMobileMenu}
            showMobileMenu={showMobileMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
