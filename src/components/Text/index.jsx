import React from "react";

const sizes = {
  desktop_body: "font-gerbera text-[16px] font-normal",
  desktop_h3: "text-[24px] font-normal md:text-[22px]",
  desktop_body_m: "font-gerbera text-[12px] font-normal",
  textxs: "text-[10px] font-normal",
  texts: "text-[12px] font-normal",
  textmd: "text-[16px] font-normal",
};

const Text = ({ children, className = "", as, size = "textmd", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-a700 font-gerberabold ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
