import React from "react";

export default function OrdersPage() {
  return (
    <div className="p-4 text-gray-800 lg:px-20 xl:px-40">
      <table className="border-separate border-spacing-3 w-full ">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>



          <tr className="text-sm odd:bg-emerald-100 md:text-base">
            <td className="hidden py-5 px-1 md:block">1234876590</td>
            <td className="py-5 px-1">1.03.2023</td>
            <td className="py-5 px-1">10.20</td>
            <td className="hidden md:block py-5 px-1">Veggie Pizza</td>
            <td className="py-5 px-1">On the way (approx. 4min)..</td>
          </tr>

          <tr className="text-sm  bg-green-50 md:text-base ">
            <td className="hidden md:block py-5 px-1">1234876590</td>
            <td className="py-5 px-1">1.02.2023</td>
            <td className="py-5 px-1">8.20</td>
            <td className="hidden py-5 px-1 md:block">Iced Vanilla Latte</td>
            <td className="py-5 px-1">On the way (approx. 8min)..</td>
          </tr>

          <tr className="text-sm odd:bg-cyan-50 first-letter:md:text-base ">
            <td className="hidden py-5 px-1 md:block ">1234876590</td>
            <td className="py-5 px-1">23.05.2023</td>
            <td className="py-5 px-1">45.55</td>
            <td className="hidden py-5 px-1 md:block ">Big Burger, Tacos</td>
            <td className="py-5 px-1">On the way (approx. 22min)..</td>
          </tr>

        

    
        </tbody>
      </table>
    </div>
  );
}
