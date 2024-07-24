import { Text, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-end h-[366px] md:h-auto py-[70px] md:py-5 bg-red-900 bg-cover bg-no-repeat`}
    >
      <div className="container-xs mt-2 flex md:p-5">
        <div className="flex w-[28%] flex-col gap-[50px] md:w-full">
          <Img src="images/img_1_1.svg" alt="Footer Logo" className="h-[54px] w-[42%]" />
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col items-start">
              <Text size="desktop_body" as="p">
                Телефон
              </Text>
              <Text size="desktop_body" as="p">
                +7 (999) 123-45-67
              </Text>
            </div>
            <div className="flex flex-col items-start">
              <Text size="desktop_body" as="p">
                Адрес
              </Text>
              <Text size="desktop_body" as="p">
                проспект Ленина 100/1 БЦ Сибирские Афины
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

