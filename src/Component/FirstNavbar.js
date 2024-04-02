import React, { useState } from "react";

export const FirstNavbar = () => {
  let [nav, setNav] = useState(false);

  const handleOnClick = () => {
    setNav(!nav);
  };
  return (
    <div className=" w-full bg-[#00457C] mt-0 py-5 px-6 grid grid-cols-3 text-slate-100 sticky top-0">
      <div className="col-span-2 hidden md:flex py-2 pl-8   mx-auto">
        <i className="fa-brands fa-paypal text-md"></i>
        <ul className="flex md:text-[0.59rem] lg:text-xs text-slate-200 pl-2">
          <li className="px-1 lg:pl-4">Dashboard</li>
          <li className="px-1 lg:pl-4">Finances</li>
          <li className="px-1 lg:pl-4">Send and Request</li>
          <li className=" px-1 lg:pl-4">Deals</li>
          <li className=" px-1 lg:pl-4">Wallet</li>
          <li className=" px-1 lg:pl-4">Activity</li>
          <li className="px-1 :pl-4">Help</li>
        </ul>
      </div>

      {/* Only works in small screen*/}
      <div className="col-span-2 py-4 md:hidden pl-4">
        <div className="col-span-2  md:flex ">
          <div onClick={handleOnClick}>
            {!nav ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </div>

          <ul
            className={
              nav
                ? "md:flex justify-around text-xs text-slate-200 py-2"
                : "fixed left-[-100%]"
            }
          >
            <li className="py-2">Dashboard</li>
            <li className="py-2">Finances</li>
            <li className="py-2">Send and Request</li>
            <li className="py-2">Deals</li>
            <li className="py-2">Wallet</li>
            <li className="py-2">Activity</li>
            <li className="py-2">Help</li>
          </ul>
        </div>
      </div>

      <div className=" md:mx-auto">
        <i className="fa-solid fa-bell text-sm py-4 md:py-0 lg:py-0"></i>
        <i className="fa-solid fa-gear text-sm pl-4 py-4 md:py-0 lg:py-0"></i>
        <button className="invisible pl-4 text-[0.7rem] font-bold sm:visible md:visible lg:visible">
          LOG OUT
        </button>
      </div>
    </div>
  );
};
