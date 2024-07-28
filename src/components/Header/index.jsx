import { Heading, Text, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex flex-col items-start gap-[68px]`}>
      <div className="flex flex-col gap-6 self-stretch">
        <div className="flex items-start justify-between gap-5">
          <Img src="images/img_1_1.svg" alt="Header Logo" className="h-[30px] w-[6%] self-center" />
          <div className="flex w-[22%] justify-between gap-5">
            <Text size="desktop_body" as="p">
              +7 (999) 123-45-67
            </Text>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <a href="/cart">
                  <Img src="images/img_shopping_cart.svg" alt="Cart Icon" className="h-[24px]" />
                </a>
              </div>
              <Text size="desktop_body" as="p">
                Корзина
              </Text>
            </div>
          </div>
        </div>
        <div className="h-px bg-white-a700" />
      </div>
      <Heading size="desktop_h0" as="h1" className="!text-white-a700">
        Бистро-холл Союз
      </Heading>
    </header>
  );
}

