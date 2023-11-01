import React from "react";
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";

const Navbar = ({isSidebar,setIsSidebar}) => {
  return (
    <header  className={`bg-white h-46 w-full shadow-sm ${isSidebar ? '' : 'ml-0'}`}>
    {isSidebar ? (
        <AiOutlineLeft
          onClick={() => setIsSidebar(false)}
          className="relative right-3 top-2 bg-blue-50 rounded-full shadow-sm"
        />
      ) : (
        <AiOutlineRight
          onClick={() => setIsSidebar(true)}
          className="relative left-1 top-2 bg-blue-50 rounded-full shadow-sm"
        />
      )}
    
      <div className="flex items-center justify-start p-3">
        <div className="flex items-center">
          <AiOutlineLeft className="text-gray-500 text-lg" />
          <span className="text-gray-500 lg:text-lg md:text-xs  text-xs mx-2">
            Back{" "}
          </span>
          <p className="text-gray-500 mx-2 text-xs lg:text-lg  md:inline">
            | Quality Events /
          </p>
        </div>

        <div className="flex flex-col ">
          <span className="text-black text-xs lg:text-lg md:text-xs ">
            Procedures for verification not followed correctly
          </span>
        </div>
      </div>

      <hr className="bg-grey-500 text-grey-500" />

      <div className="lg:flex items-center w-full ml-5 p-1">
        <div className="lg:w-2/3 flex flex-col">
          <span className="text-grey-500 text-xs lg:text-lg md:text-sm ">
            NC-2 Nonconformance
          </span>
          <div className="flex flex-row">
            <p className="text-black text-xs lg:text-lg md:text-sm font-bold">
              Procedures for verification not followed correctly
            </p>
            <span className="text-white bg-blue-500 w-12 h-5 flex flex-row justify-center items-center rounded-full lg:mt-1 md:ml-2">
              open
            </span>
          </div>
        </div>
        <div className="lg:w-1/3 lg:text-right lg:mt-0 mt-4 flex items-center md:justify-center">
          <div className="w-18 flex items-center cursor-pointer border p-1">
            <BsUpload className="text-lg mr-2" />
            <p className="text-gray-500 md:text-16px text-12px leading-12px font-montserrat">
              Export File
            </p>
          </div>
          <span className="lg:inline lg:text-right text-center text-base ml-2 border p-1 cursor-pointer">
            Cancel Quality Event
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
