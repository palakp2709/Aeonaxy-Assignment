import React from "react";

const Card = (props) => {
  return (
    <div className=" sm:w-[22rem] flex  border border-gray-100 rounded-lg p-2  mt-4">
      <div className="h-6 w-6 text-center rounded-full bg-[#f3f1f1]">
          {props.icon}
      </div>

      <div className="ml-3 w-[17rem]">
        <h1 className="text-[0.69rem] font-semibold">{props.heading}</h1>
        <p className=" text-[0.49rem] text-[#7e7d7d] font-semibold">
            {props.description}
        </p>
      </div>

      <button className="text-[0.5rem]  text-[#3491dd] font-bold" >{props.button}</button>
    </div>
  );
};

export default Card;
