import React, { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { LiaRocketSolid } from "react-icons/lia";
import { FiEdit2 } from "react-icons/fi";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";

const Stages = () => {
  const [activeSection, setActiveSection] = useState("stages");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setActiveAccordion(null); // Reset the active accordion when switching sections
  };

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div className="p-8">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div
            className={`w-1/2 cursor-pointer text-center ${
              activeSection === "stages" ? "bg-yellow-200 text-Black" : ""
            }`}
            onClick={() => handleSectionClick("stages")}
          >
            <p className="text-lg font-bold mb-4">Stages</p>
          </div>
          <div
            className={`w-1/2 cursor-pointer text-center ${
              activeSection === "tasks" ? "bg-yellow-200 text-Black" : ""
            }`}
            onClick={() => handleSectionClick("tasks")}
          >
            <p className="text-lg font-bold mb-4">Tasks</p>
          </div>
        </div>

        <div
          className={`bg-white p-4 rounded-lg shadow-md mb-4 relative ${
            activeAccordion === 0 ? " border border-yellow-500" : ""
          }`}
          onClick={() => handleAccordionClick(0)}
        >
          <div className="flex justify-between items-center ">
            <div
              className={`rounded-full h-6 w-6 flex items-center justify-center relative right-7 border border-yellow-500 ${
                activeAccordion === 0
                  ? "bg-yellow-500 text-white "
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              1
            </div>
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">Source</h2>
              <CgNotes className="ml-2" />
              <LiaRocketSolid className="ml-2" />
            </div>
            <FiEdit2 className="ml-auto text-grey-500" />
            <div className="text-gray-500">
              {activeAccordion === 0 ? (
                <BiChevronUp className="w-6 h-6" />
              ) : (
                <BiChevronDown className="w-6 h-6" />
              )}
            </div>
          </div>
          {activeAccordion === 0 && (
            <div className="mt-4">
              <div className="flex items-center">
                <CiCircleMore className="text-blue-500" />
                <span className="text-blue-500 ml-2">Pending Review</span>
                <CiCircleMore className="text-purple-500 ml-4" />
                <span className="text-purple-500 ml-2">Pending Approval</span>
              </div>

              <div className="mt-2 flex flex-col">
                <span className="text-xs text-grey-600 font-medium">
                  ROOT CAUSE
                </span>
                <span className="font-semibold">Root Analysis</span>
              </div>
              <div className="mt-2">
                <ul className="ml-6 list-disc">
                  <li className="text-sm">
                    Reason for Nonconformance: There were untrained team members
                  </li>
                  <li className="text-sm">
                    Nonconformance Impact: Nonconformance to training SOP
                    leading to potential impact to product
                  </li>
                </ul>
              </div>
              <hr className="mt-3"/>
              <div className="flex">
                <div className="w-1/2 p-4">
                  <p className="text-sm text-gray-500 font-semibold">
                    PRIORITY
                  </p>
                  <p className="text-sm text-yellow-600 bg-yellow-200 ">
                    No option selected
                  </p>
                </div>
                <div className="w-1/2 p-4">
                  <p className="text-sm text-gray-500 font-semibold">
                    RISK LEVEL
                  </p>
                  <p className="text-sm text-gray-800">Low</p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button className="border w-52 text-black px-4 py-2 rounded">
                  Submit for Review
                </button>
                <button className="bg-yellow-500 text-white ml-1 w-52 px-4 py-2 rounded">
                  Submit for Approval
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`bg-white p-4 rounded-lg shadow-md mb-4 relative ${
          activeAccordion === 1 ? " border border-yellow-500" : ""
        }`}
        onClick={() => handleAccordionClick(1)}
      >
        <div className="flex justify-between items-center">
          <div
            className={`rounded-full h-6 w-6 flex items-center justify-center relative right-7 border border-yellow-500 ${
              activeAccordion === 1
                ? "bg-yellow-500 text-white "
                : "bg-gray-200 text-gray-500"
            }`}
          >
            2
          </div>
          <h2 className="text-lg font-semibold text-left">Immediate Action</h2>
          <div className="text-gray-500">
            {activeAccordion === 0 ? (
              <BiChevronUp className="w-6 h-6 flex flex-3" />
            ) : (
              <BiChevronDown className="w-6 h-6" />
            )}
          </div>
        </div>
        {activeAccordion === 1 && (
          <div className="mt-4">Content for Accordion 2 goes here.</div>
        )}
      </div>

      <div
        className={`bg-white p-4 rounded-lg shadow-md mb-4 relative ${
          activeAccordion === 2 ? " border border-yellow-500" : ""
        }`}
        onClick={() => handleAccordionClick(2)}
      >
        <div className="flex justify-between items-center">
          <div
            className={`rounded-full h-6 w-6 flex items-center justify-center relative right-7 border border-yellow-500 ${
              activeAccordion === 2
                ? "bg-yellow-500 text-white "
                : "bg-gray-200 text-gray-500"
            }`}
          >
            3
          </div>
          <h2 className="text-lg font-semibold">Investigation</h2>
          <div className="text-gray-500">
            {activeAccordion === 0 ? (
              <BiChevronUp className="w-6 h-6" />
            ) : (
              <BiChevronDown className="w-6 h-6" />
            )}
          </div>
        </div>
        {activeAccordion === 2 && (
          <div className="mt-4">Content for Accordion 3 goes here.</div>
        )}
      </div>

      <div
        className={`bg-white p-4 rounded-lg shadow-md mb-4 relative ${
          activeAccordion === 3 ? " border border-yellow-500" : ""
        }`}
        onClick={() => handleAccordionClick(3)}
      >
        <div className="flex justify-between items-center">
          <div
            className={`rounded-full h-6 w-6 flex items-center justify-center relative right-7 border border-yellow-500 ${
              activeAccordion === 3
                ? "bg-yellow-500 text-white "
                : "bg-gray-200 text-gray-500"
            }`}
          >
            4
          </div>
          <h2 className="text-lg font-semibold text-grey-600">verification</h2>
          <div className="text-gray-500">
            {activeAccordion === 0 ? (
              <BiChevronUp className="w-6 h-6" />
            ) : (
              <BiChevronDown className="w-6 h-6" />
            )}
          </div>
        </div>
        {activeAccordion === 3 && (
          <div className="mt-4">Content for Accordion 4 goes here.</div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Stages;
