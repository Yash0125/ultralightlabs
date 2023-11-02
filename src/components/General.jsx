import React from "react";
import {MdProductionQuantityLimits} from 'react-icons/md'

const General = () => {
  return (
    <div className="bg-white sm:m-6 md:m-6 lg:mt-10 p-4 rounded-lg shadow-md">
      <h1 className="text-md font-bold text-gray-800 mb-4">General</h1>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <p className="font-sm text-grey-100">Type</p>
          <p>Nonconformance</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="font-sm text-grey-100">owner</p>
          <div className="w-26 flex flex-row relative border rounded-full p-1">
            <img
              src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685699309/jffhwv55gikane4lv7py.png"
              alt="Profile"
              className="w-4 h-4 object-cover rounded-full"
            />
            <p className="text-xs ml-1">Kathryn Murphy</p>
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <p className="font-sm text-grey-100">Created By</p>
          <div className="w-26 flex flex-row relative border rounded-full p-1">
            <img
              src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685699309/jffhwv55gikane4lv7py.png"
              alt="Profile"
              className="w-4 h-4 object-cover rounded-full"
            />
            <p className="text-xs ml-1">Cody Fisher</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-sm text-grey-100">Related Products</p>
          <div className="w-26 flex flex-row relative border rounded-full p-1">
          <MdProductionQuantityLimits className="h-[18px] w-[18px] text-gray-500" />
            <p className="text-xs font-bold text-grey-500 ml-1">Reimagined TENS Device</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
