import React from "react";

const sizes = {
  desktop_h0: "font-mont text-[90px] font-black md:text-[48px]",
  desktop_h1: "font-mont text-[40px] font-black md:text-[38px] sm:text-[36px]",
};

const Heading = ({ children, className = "", size = "desktop_h1", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-mont ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

