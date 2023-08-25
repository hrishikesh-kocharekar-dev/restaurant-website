import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div
      className="h-12 md:h-10 p-4 lg:p-16 xl:p-18 text-green-500 
    flex items-center justify-between"
    >
      <Link href="/" className="font-bold ">
        Deliveroo
      </Link>
      <p>@ ALL RIGHTS RESERVED.</p>
    </div>
  );
}
