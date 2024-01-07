"use client";
import React from "react";

const Portfolio = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-gray-100 text-base uppercase font-medium text-center">
        Portfólio
      </h2>
      <div className="flex flex-col items-end justify-center w-full mb-8">
        <div className="w-2/3 h-[.15rem] bg-primary-blue"></div>
      </div>

      <div className="w-full h-full pl-8 overflow-x-scroll">
        <div className="w-[43rem] inline-grid grid-cols-3 gap-4 grid-rows-2 overflow-x-scroll p-4">
          <div className="w-52 h-40 rounded-lg shadow-3xl"></div>
          <div className="w-52 h-40 rounded-lg shadow-3xl"></div>
          <div className="w-52 h-40 rounded-lg shadow-3xl"></div>
          <div className="w-52 h-40 rounded-lg shadow-3xl"></div>
          <div className="w-52 h-40 rounded-lg shadow-3xl"></div>
          <div className="w-52 h-40 rounded-lg shadow-3xl"></div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center w-full mt-8">
        <div className="w-2/3 h-[.15rem] bg-primary-blue"></div>
      </div>
    </section>
  );
};

export default Portfolio;
