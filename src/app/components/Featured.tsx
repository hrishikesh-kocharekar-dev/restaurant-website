
import Image from "next/image";
import React from "react";
import { featuredProducts } from "../data";

export default function Featured() {
  return (
    <div>
      <div className="w-screen overflow-x-scroll text-green-500">
        {/* WRAPPER */}
        <div className="w-max flex">
          {/* <div className="w-max flex m-auto pb-10"> */}
          {/* SINGLE ITEM */}
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="w-screen  h-[80vh] flex flex-col items-center justify-around p-4 hover:bg-green-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
            >
              {/* IMAGE CONTAINER */}
              {item.img && (
                <div className="relative flex-1 w-full hover:rotate-[50deg] transition-all duration-400">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              {/* TEXT CONTAINER */}
              <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                  {item.title}
                </h1>
                <p className="p-4 2xl:p-8">{item.desc}</p>
                <span className="text-xl font-bold">${item.price}</span>
                {/* <span className="text-xl font-bold">${item.desc}</span> */}
                {/* <span className="text-xl font-bold">${item.img}</span> */}
                <button className="text-white p-2 bg-green-500  rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
