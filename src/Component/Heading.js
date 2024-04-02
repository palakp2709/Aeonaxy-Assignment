import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h1 className="text-sm sm:text-lg font-semibold">{props.head}</h1>
      <p className="text-[0.5rem] sm:text-[0.54rem] font-medium text-[#7e7d7d]">
       {props.des}
      </p>
    </div>
  );
};

export default Heading;
