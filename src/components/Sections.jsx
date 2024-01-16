import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Fade from "react-reveal/Fade";

const Sections = ({ title, image, button }) => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url('/images/${image}')` }}
    >
      <div className="text-center absolute top-24">
        <Fade bottom>
          <h1 className="text-4xl font-bold mt-0">{title}</h1>
          <p className="mt-1">Order Online for Touchless Delivery</p>
        </Fade>
      </div>

      <div className="absolute bottom-24 md:flex-">
        {button ? (
          <Fade bottom>
            <button className="text-white text-opacity-85 rounded-2xl px-12 p-1 mr-2 bg-gray-700">
              {button}
            </button>
          </Fade>
        ) : (
          <>
            <div className="md:flex-row flex-col flex gap-2">
              <Fade bottom>
                <button className="text-white text-opacity-85 rounded-2xl px-12 p-1 bg-gray-800 bg-opacity-70">
                  Custom Order
                </button>
                <button className="text-black text-opacity-85 rounded-2xl px-12 p-1 bg-white bg-opacity-80">
                  Existing Inventory
                </button>
              </Fade>
            </div>
          </>
        )}
      </div>

      <div className="absolute bottom-5 cursor-pointer">
        <IoIosArrowDown size={27} color="white" className="animate-bounce" />
      </div>
    </div>
  );
};

export default Sections;
