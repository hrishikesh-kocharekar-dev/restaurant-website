import Image from "next/image";
import React from "react";

// type Props = {
//   price: number;
//   id: number;
//   title: string;
// };



const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-green-500 lg:flex-row">
     
      <div
        className="h-1/2 flex-col  overflow-scroll justify-center p-4 flex   
      lg:h-full  2xl:w-1/2 lg:w-2/3  xl:px-40 lg:px-20"
      >
        <div className="flex mb-4 items-center justify-between  ">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="text-xl font-bold uppercase ">Sicilian</h1>
            <span>Large</span>
          </div>

          <h2 className="font-bold">$39.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        <div className="flex justify-between mb-4 items-center ">
          <Image src="/temporary/p2.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase font-bold text-xl ">Bacon Deluxe </h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$29.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        <div className="flex items-center mb-4 justify-between">
          <Image src="/temporary/p3.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase font-bold text-xl">Bella Napoli</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$29.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
   
      <div
        className="h-1/2 flex justify-center bg-fuchsia-50  lg:h-full flex-col
       p-4 gap-4 lg:w-1/3 2xl:w-1/2 2xl:text-xl 2xl:gap-6 lg:px-20 xl:px-40"
      >
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$71.70</span>  
          {/* <span className="calc"></span>   */}
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$5.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        {/* <hr className="mx-4" /> */}
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$77.70</span>
        </div>
        {/* <button className="bg-green-500 p-3 rounded-md text-white  w-1/2 self-end">
          CHECKOUT
        </button> */}
      </div>
    </div>
  );
};

export default CartPage;
