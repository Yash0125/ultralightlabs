import React, { useState } from "react";
import { RiHome6Line } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiStudentLight, PiCheckSquareBold } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { IoDocumentOutline, IoNotificationsOutline } from "react-icons/io5";
import { GiCycle } from "react-icons/gi";
import { LiaRocketSolid } from "react-icons/lia";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";

const Sidebar = () => {
  const menuItems = [
    {
      icon: <RiHome6Line className="h-[18px] w-[18px] text-gray-500" />,
      name: "Home",
    },
    {
      icon: (
        <MdProductionQuantityLimits className="h-[18px] w-[18px] text-gray-500" />
      ),
      name: "Product",
    },
    {
      icon: <IoDocumentOutline className="h-[18px] w-[18px] text-gray-500" />,
      name: "Document",
    },
    {
      icon: <PiStudentLight className="h-[18px] w-[18px] text-gray-500" />,
      name: "Training",
    },
    {
      icon: <FiTruck className="h-[18px] w-[18px] text-gray-500" />,
      name: "Suppliers",
    },
    {
      icon: <BsGraphUpArrow className="h-[18px] w-[18px] text-gray-500" />,
      name: "Analytics",
    },
    {
      icon: (
        <MdOutlineEventAvailable className="h-[18px] w-[18px] text-gray-500" />
      ),
      name: "Quality Events",
    },
    {
      icon: <GiCycle className="h-[18px] w-[18px] text-gray-500" />,
      name: "Changes",
    },
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState("Quality Events");

  const selectMenuItem = (itemName) => {
    setSelectedMenuItem(itemName);
  };

  return (
    <section className="bg-white p-4 rounded shadow-md h-full max-w-[280px] hidden md:flex flex-col justify-between py-[60px] pl-[20px]">
      <h1 className="ml-2 text-yellow-500 font-bold text-3xl mb-4 ">
        Ultralight
      </h1>

      <div className="h-full w-full flex flex-col gap-[60px]">
        <ul className="flex flex-col gap-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`pl-2 flex items-center gap-[10px] w-full cursor-pointer ${
                selectedMenuItem === item.name
                  ? "bg-yellow-300 border-l-4 border-yellow-500 hover:bg-yellow-200"
                  : "bg-white hover:bg-yellow-200"
              }`}
              onClick={() => selectMenuItem(item.name)}
            >
              {item.icon}
              <p className="text-gray-500 md:text-[16px] text-[12px] leading-[22px] font-montserrat">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-[20px] text-white mt-9">
        <div className="mt-[120px]">
          <ul className="flex flex-col gap-6">
            <li
              className={`flex items-center gap-[10px] w-full cursor-pointer ${
                selectedMenuItem === "changelog"
                  ? "bg-yellow-300 border-l-4 border-yellow-500 hover:bg-yellow-200"
                  : "bg-white hover:bg-yellow-200"
              }`}
              onClick={() => selectMenuItem("changelog")}
            >
              <LiaRocketSolid className="h-[18px] w-[18px] text-gray-500" />
              <p
                className="md:text-[16px] text-[12px] leading-[22px] font-montserrat text-gray-500
                "
              >
                changelog
              </p>
            </li>

            <li
              className={`flex items-center gap-[10px] w-full cursor-pointer ${
                selectedMenuItem === "Settings"
                  ? "bg-yellow-300 border-l-4 border-yellow-500 hover:bg-yellow-200"
                  : "bg-white hover:bg-yellow-200"
              }`}
              onClick={() => selectMenuItem("Settings")}
            >
              <AiOutlineSetting className="h-[18px] w-[18px] text-gray-500" />
              <p
                className="md:text-[16px] text-[12px] leading-[22px] font-montserrat text-gray-500
                "
              >
                Settings
              </p>
            </li>

            <li
              className={`flex items-center gap-[10px] w-full cursor-pointer ${
                selectedMenuItem === "Notifiction"
                  ? "bg-yellow-300 border-l-4 border-yellow-500 hover:bg-yellow-200"
                  : "bg-white hover:bg-yellow-200"
              }`}
              onClick={() => selectMenuItem("Notifiction")}
            >
              <IoNotificationsOutline className="h-[18px] w-[18px] text-gray-500" />
              <p
                className="md:text-[16px] text-[12px] leading-[22px] font-montserrat text-gray-500
                "
              >
                Notifiction
              </p>
              <div className="bg-red-500 w-6 h-6 flex justify-center items-center rounded-full ml-24">
                <span className="text-white">2</span>
              </div>
            </li>

            <li
              className={`flex items-center gap-[10px] w-full cursor-pointer ${
                selectedMenuItem === "Task"
                  ? "bg-yellow-300 border-l-4 border-yellow-500 hover:bg-yellow-200"
                  : "bg-white hover:bg-yellow-200"
              }`}
              onClick={() => selectMenuItem("Task")}
            >
              <BsCheck2Square className="h-[18px] w-[18px] text-gray-500" />
              <p
                className="md:text-[16px] text-[12px] leading-[22px] font-montserrat text-gray-500
                "
              >
                Task
              </p>
              <div className="bg-red-500 w-6 h-6 flex justify-center items-center rounded-full ml-36">
                <span className="text-white">2</span>
              </div>
            </li>

            <li
              className={`flex items-center gap-[10px] w-full cursor-pointer ${
                selectedMenuItem === "Search"
                  ? "bg-yellow-300 border-l-4 border-yellow-500 hover:bg-yellow-200"
                  : "bg-white hover:bg-yellow-200"
              }`}
              onClick={() => selectMenuItem("Search")}
            >
              <AiOutlineSearch className="h-[18px] w-[18px] text-gray-500" />
              <p
                className="md:text-[16px] text-[12px] leading-[22px] font-montserrat text-gray-500
                "
              >
                Search
              </p>
            </li>
          </ul>
        </div>
      </div>

      <hr className="mt-7" />
      <div className="flex h-16 items-center mt-3">
        <div className="w-12 h-12 relative">
          <img
            src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685699309/jffhwv55gikane4lv7py.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="ml-3">
          <p className="text-xl font-bold">Jane Cooper</p>
          <p className="text-sm text-gray-400">NBS LLC</p>
        </div>
        <div className="ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
