import React, { useState } from "react";


export const SecondNav = () => {
  let [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div >
        <ul className="hidden sm:flex text-[0.48rem] md:text-[0.59rem] lg:text-xs justify-evenly p-5 py-6 shadow-md font-medium  ">
          <li className="pl-2 px-2 p-2 rounded-s-full rounded-e-full hover:bg-[#edf8fd] hover:text-[#3436a7] hover:font-bold">
            Account
          </li>
          <li className="pl-2 px-2 p-2 rounded-s-full rounded-e-full hover:bg-[#edf8fd] hover:text-[#3436a7] hover:font-bold">
            Security
          </li>
          <li className="pl-2 px-2 p-2 rounded-s-full rounded-e-full hover:bg-[#edf8fd] hover:text-[#3436a7] hover:font-bold">
            Data & privacy
          </li>
          <li className="pl-2 px-2 p-2 rounded-s-full rounded-e-full hover:bg-[#edf8fd] hover:text-[#3436a7] hover:font-bold">
            Payments
          </li>
          <li className="pl-2 px-2 p-2 rounded-s-full rounded-e-full hover:bg-[#edf8fd] hover:text-[#3436a7] hover:font-bold">
            Notifications
          </li>
          <li className="pl-2 px-2 p-2 rounded-s-full rounded-e-full hover:bg-[#edf8fd] hover:text-[#3436a7] hover:font-bold">
            Seller Tools
          </li>
          <li className=" pl-2 px-2 p-2 rounded-s-full rounded-e-full hover:bg-[#edf8fd] hover:text-[#3436a7] hover:font-bold">
            Statements and taxes
          </li>
          <i class="fa-solid fa-chevron-down sm:hidden"></i>
        </ul>
      </div>

      <div className=" py-5 px-5 sm:hidden">
        <div onClick={handleClick}>
          {nav ? (
            <>
            <i class="fa-solid fa-chevron-down "></i> 
            </>
          ) : (
            <i class="fa-solid fa-chevron-right"></i>
          )}
        </div>

        <ul className={nav? "p-4 text-xs " : "fixed left-[-100%]"}>
          <li className="py-2 hover:text-sm">Account</li>
          <li className="py-2 hover:text-sm">Security</li>
          <li className="py-2 hover:text-sm">Data & privacy</li>
          <li className="py-2 hover:text-sm">Payments</li>
          <li className="py-2 hover:text-sm">Notifications</li>
          <li className="py-2 hover:text-sm">Seller Tools</li>
          <li className="py-2 hover:text-sm">Statements and taxes</li>
        </ul>
      </div>
    </div>
  );
};
