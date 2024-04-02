import React from "react";
import Card from "./Card";
import Heading from "./Heading";

export const SellerTools = () => {
  return (
    <div className="container">
      <div className="  sm:p-4 m-2 sm:pl-6 w-[18rem] sm:w-[30rem]">
        <h1 className="text-xl sm:text-2xl font-semibold">Seller tools</h1>
        <p className=" text-[0.54rem] sm:text-xs text-[#7e7d7d] font-medium">
          Sell online easily and grow your business with Seller Tools. Create
          PayPal buttons, get instant payment notifications, and do much more.
        </p>
      </div>

      <div className="subContainer">
        <div className="pl-5  sm:px-14 p-2">
          <Heading
            head={"Selling online"}
            des={
              "Grow your business by making it easier for your customers to pay you."
            }
          />
          <Card
            icon={
              <i className="fa-brands fa-paypal text-md text-[#182979]"></i>
            }
            heading={"PayPal buttons"}
            description={`Create and manage secure for your customers to add items to 
            their cart, buy, donate, or subscribe.`}
            button={"Manage"}
          />

          <Card
            icon={<i class="fa-solid fa-laptop text-sm"></i>}
            heading={"Website preferences"}
            description={`Control how you sell online by turning on express
            checkouts and bringing customers back to your website after they pay with PayPal.
            `}
            button={"Update"}
          />

          <Card
            icon={<i class="fa-solid fa-bell text-sm text-[#47a9d6]"></i>}
            heading={"PayPal buttons"}
            description={`Create and manage secure for your customers to add items to 
            their cart, buy, donate, or subscribe.`}
            button={"Update"}
          />
        </div>

        <div className="pl-5  sm:px-14 p-2">
          <Heading
            head={"Getting paid"}
            des={"Choose from various payment tools to attract your customers."}
          />
          <Card
            icon={
              <i class="fa-regular fa-file-lines text-[#47a9d6] text-sm"></i>
            }
            heading={"Invoices"}
            description={`Create professional invoices and customize it as per requirements.`}
            button={"Manage"}
          />
        </div>

        <div className="pl-5  sm:px-14 p-2">
          <Heading
            head={"More selling tools"}
            des={"Check out the other tools that we have for you to help you sell online."}
          />
          <Card
            icon={<i class="fa-solid fa-truck text-[#47a9d6] text-sm"></i>}
            heading={"Shipping preferences"}
            description={`Create your shipping labels for hassle-free returns.`}
            button={"Create"}
          />
        </div>
      </div>
    </div>
  );
};
