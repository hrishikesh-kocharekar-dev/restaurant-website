import Price from "@/app/components/Price";
import { singleProduct } from "@/app/data";
import Image from "next/image";
import React from "react";

export default function SingleProduct() {
  return (
    <div
      className="px-4 xl:px-40 h-screen flex lg:px-20 
    flex-col text-green-500 
    justify-around md:gap-8 md:flex-row md:items-center "
    >
      {singleProduct.img && (
        <div className=" w-full h-1/2 md:h-[60%] relative">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      <div className="h-1/2 flex-col gap-4 md:justify-center md-gap-4 xl:gap-6 md:h-[60%] ">
        <h1 className="text-3xl uppercase font-bold ">{singleProduct.title}</h1>
        {/* <h1>{singleProduct.img}</h1> */}
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
        {/* <h1>{singleProduct.desc}</h1> */}
      </div>
    </div>
  );
}
