import React, { useEffect, useState } from "react";

const SetupBackground = ({ ...props }) => {
  return (
    <div className=" absolute w-full h-auto md:w-2/3 bg-gray-200 rounded-xl mx-6 ">
      <div className="">
        <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
        <div className="flex ">
          <div className="bg-gray-100 rounded-xl m-2 w-full h-6"></div>
          <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6 animate-pulse"></div>
          <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6 animate-pulse"></div>
        </div>
        <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
        <div className="flex ">
          <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6"></div>
          <div className="bg-gray-100 rounded-xl m-2 w-full h-6 animate-pulse"></div>
        </div>
        <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>

        <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
        <div className="flex ">
          <div className="bg-gray-100 rounded-xl m-2 w-full h-6"></div>
          <div className="bg-gray-100 rounded-xl m-2 w-full h-6"></div>
          <div className="bg-gray-100 rounded-xl m-2 w-full h-6"></div>
          <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6 animate-pulse"></div>
        </div>
        <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
        <div className="flex ">
          <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6"></div>
          <div className="bg-gray-100 rounded-xl m-2 w-full h-6 animate-pulse"></div>
        </div>
        <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
        <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
        <div className="flex ">
          <div className="bg-gray-100 rounded-xl m-2 w-full h-6"></div>
          <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6 animate-pulse"></div>
        </div>
        <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
        <div className="flex ">
          <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6"></div>
          <div className="bg-gray-100 rounded-xl m-2 w-full h-6 animate-pulse"></div>
        </div>
        <div className="flex ">
          <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6"></div>
          <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6"></div>

          <div className="bg-gray-100 rounded-xl m-2 w-full h-6 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SetupBackground;
