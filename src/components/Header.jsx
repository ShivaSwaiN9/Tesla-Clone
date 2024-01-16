import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GiTireIronCross } from "react-icons/gi";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cars = useSelector(selectCars)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed flex items-center z-10 top-0 left-0 right-0">
      <a href="#" className="p-4">
        <img src="/images/logo.svg" alt="" />
      </a>

      <div className="hidden md:flex text-md font-medium uppercase items-center gap-4 flex-1 justify-center">
        {cars && cars.map((car, index) => (
          <a key={index} href="#"><p>{car}</p></a>
        ))}
      </div>
      <div
        onClick={toggleMenu}
        className="cursor-pointer pr-3 flex text-md font-medium uppercase items-center gap-4"
      >
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <IoMdMenu size={27} />
      </div>

      <div
        className={`p-4 fixed list-none flex flex-col gap-4 font-medium top-0 right-0 bottom-0 bg-white z-100 w-80 h-30 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div
          className="flex justify-end text-lg cursor-pointer"
          onClick={closeMenu}
        >
          <GiTireIronCross />
        </div>
        {cars && cars.map((car, index) => (
          <li key={index} className="border-b p-1 border-black"><a href="">{car}</a></li>
        ))}
        <li className="border-b p-1 border-black"><a href="">Existing Inventory</a></li>
        <li className="border-b p-1 border-black"><a href="">Used Inventory</a></li>
        <li className="border-b p-1 border-black"><a href="">Trade-in</a></li>
        <li className="border-b p-1 border-black"><a href="">Cybertruck</a></li>
        <li className="border-b p-1 border-black"><a href="">Roadster</a></li>
        <li className="border-b p-1 border-black"><a href="">Semi</a></li>
        <li className="border-b p-1 border-black"><a href="">Charging</a></li>
      </div>
    </div>
  );
};

export default Header;
