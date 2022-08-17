import React from "react";

const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white transition-all ease-linear duration-200">
      <Icon className="h-8 mb-1 group-hover:animate-bounce"></Icon>
      <p className="opacity-0 group-hover:opacity-100  tracking-widest ease-linear duration-200">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
