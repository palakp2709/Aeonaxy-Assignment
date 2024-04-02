import React from "react";

const Footer = () => {
  return (
    <div className="mt-14">
      <div className=" flex pl-8 border-gray-100 border-t-2 border-b-2">
        <img
          className="h-12 "
          src="https://cdn.iconscout.com/icon/free/png-256/free-paypal-58-711793.png?f=webp"
          alt="logo"
        />

        <ul className="pl-40 sm:flex text-[0.68rem] font-semibold py-4 sm:pl-8">
          <li className="pl-6 md:pl-0">Help</li>
          <li className="pl-6">Contact Us</li>
          <li className="pl-6">Security</li>
          <li className="pl-6">Fees</li>
        </ul>
      </div>

      <div className=" flex border-gray-100 border-b-2 mb-14">
        <p className="text-[0.6rem] text-[#a0a0a0] font-semibold py-4 pl-8">
          &#169;1999-2022 PayPal, Inc. All rights reserved.
        </p>

        <ul className=" sm:flex text-[0.62rem] font-semibold py-4 pl-8">
          <li className=" pl-6 md:pl-0">Privacy</li>
          <li className="pl-6">Legal</li>
          <li className="pl-6">Policy Updates</li>
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
