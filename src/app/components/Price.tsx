"use client";

import React, { useEffect, useState } from "react";
import { isPropertyAccessExpression } from "typescript";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

// isPropertyAccessExpression

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-xl">${total.toFixed(2)}</h2>
      {/* <h2 className="font-medium text-2xl">${total.toFixed(.1)}</h2> */}

      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="ring-green-400 min-w-[6rem] rounded-md p-2 ring-1"
            style={{
              background: selected === index ? " rgb(34 197 94)" : "white",
              color: selected === index ? "white" : " rgb(34 197 94)",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between ">
        <div className="flex w-full p-3 ring-green-500 ring-1  justify-between ">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              // onClick={() => setQuantity((prev) => (prev > 9 ? prev - 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>

        <button
          className=" ring-1 uppercase w-56 ring-green-500
         text-white p-3  bg-green-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
