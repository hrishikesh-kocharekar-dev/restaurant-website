import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Carticon from "./Carticon";
import Image from "next/image";

export default function Navbar() {
  const user = false;
  return (
    <div className="h-12 text-green-400 p-4 item-center flex border-b-2 border-b-green-400 justify-between">
      <div className="hidden md:flex  gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="text-XL  md:text-center font-bold">
        <Link href="/">Deliveroo</Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>

      <div className="hidden md:flex gap-4 items-center text-center ">
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/order">Order</Link>
        )}
        <Carticon />
      </div>
    </div>
  );
}
