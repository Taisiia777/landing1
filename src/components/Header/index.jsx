

  import { Heading, Text, Img } from "./..";
  import React from "react";

  export default function Header({ ...props }) {
    return (
      <header {...props} className={`${props.className} flex flex-col items-start gap-[68px]`}>
        <div className="flex flex-col gap-6 w-full"> {/* Изменено на w-full */}
          <div className="flex items-start justify-between gap-5 w-full"> {/* Добавлено w-full */}
            <Img src="images/img_1_1.svg" alt="Header Logo" className="h-[30px] w-[6%] min-w-[60px] self-center" /> {/* Добавлено min-w для логотипа */}
            <div className="flex justify-between gap-5"> {/* Удалено ограничение ширины */}
              <Text size="desktop_body" as="p" className="whitespace-nowrap"> {/* Добавлено whitespace-nowrap */}
                +7 (999) 123-45-67
              </Text>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <a href="/cart">
                    <Img src="images/img_shopping_cart.svg" alt="Cart Icon" className="h-[24px]" />
                  </a>
                </div>
                <Text size="desktop_body" as="p" className="whitespace-nowrap"> {/* Добавлено whitespace-nowrap */}
                  Корзина
                </Text>
              </div>
            </div>
          </div>
          <div className="h-px bg-white-a700 w-full" /> {/* Изменено на w-full */}
        </div>
        <Heading size="desktop_h0" as="h1" className="!text-white-a700 w-full text-left"> {/* Добавлено w-full и text-center */}
          Бистро-холл Союз
        </Heading>
      </header>
    );
  }
  