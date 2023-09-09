import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] flex items-center justify-center md:h-[calc(100vh-9rem)] ">
      <div className=" h-full rounded-md flex flex-col md:flex-row md:h-[70%]  lg:w-[60%]  shadow-xl md:w-full 2xl:w-1/2">
        <div className="relative md:h-full h-1/3  md:w-1/2  w-full ">
          <Image src="/slide3.jpg" alt="" fill className="object-cover" />
        </div>

      
      </div>
    </div>
  );
};

export default LoginPage;
