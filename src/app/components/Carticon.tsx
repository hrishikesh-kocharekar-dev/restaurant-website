import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Carticon() {
  return (
    <Link href="/cart" className="flex gap-4 items-center ">
      <div className="relative w-8 md:w-4 md:h-4 h-8">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart [{5}]</span>
    </Link>
  );
}
