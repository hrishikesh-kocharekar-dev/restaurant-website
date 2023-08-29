
import { pizzas } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function CategoryPage() {
  return (
    <div className="flex flex-wrap text-green-500">
      {pizzas.map((item) => (
        <Link
          className="w-full border-b-2 border-green-500 border-r-2 h-[60vh]  sm:w-1/2 lg:w-1/3 p-4 justify-between group flex flex-col"
          href={`/product/${item.id}`}
          key={item.id}
          // key={item}
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}

          <div className="flex  justify-between items-center font-bold">
            <h1 className="text-xl  p-2 uppercase">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">
              ${item.price}
              {/* ${item.desc} */}
              {/* ${item.img} */}
            
            </h2>
            <button className="hidden uppercase text-white p-2 bg-green-500  group-hover:block   rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
