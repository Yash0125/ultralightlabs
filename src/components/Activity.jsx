import React from "react";
import { AiOutlineMessage } from "react-icons/ai";

const Comment = ({ name, text, nested }) => (
  <div className={`flex items-center ${nested ? "mb-2" : "mb-4"}`}>
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <img
        src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685699309/jffhwv55gikane4lv7py.png"
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className={`ml-${nested ? "2" : "4"}`}>
      <p className="text-gray-800 font-semibold">{name}</p>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

const Activity = () => {
  return (
    <div>
      <div className="bg-white sm:m-6 md:m-6 lg:mt-10 p-4 rounded-lg shadow-md">
        <h1 className="text-md font-bold text-gray-800 mb-4">Activity</h1>

        <textarea
          className="w-full p-2 mb-4 rounded-md border"
          placeholder="Add a comment..."
        ></textarea>

        <div className={`flex items-center`}>
          <div className="w-8 h-8 ">
            <AiOutlineMessage className="relative rounded-full bottom-10 ml-2 bg-blue-500 text-white" />
          </div>
          <div className={`ml-4`}>
            <p className="text-gray-800 font-semibold ml-2">Robert Fox</p>
            <p className="text-gray-600 ml-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              libero tellus, porta sit amet est vitae, hendrerit egestas diam.
              Donec leo lacus, pretium et nibh et, luctus finibus eros. Sed
              dapibus imperdiet rhoncus
            </p>
          </div>
        </div>
        <div className="ml-16">
          <Comment
            name="Jane Cooper"
            text="Ut enim ad minim veniam, quis nostrud"
            nested
          />

          <Comment
            name="Albert Flores"
            text="Duis aute irure dolor in reprehenderit in voluptate velit esse"
            nested
          />
          {/* } */}

          {/* Add more nested comments as needed */}
        </div>
      </div>
    </div>
  );
};

export default Activity;
