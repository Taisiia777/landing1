import { Button, Text, Img } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

export default function Page2({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1280px]">
      <div className="container-xs flex min-w-[1280px] justify-center px-14 md:p-5 md:px-5">
        <div className="flex w-[34%] flex-col gap-5 rounded-[10px] bg-white-a700 p-4 md:w-full">
          <div className="flex items-center gap-2">
            <Img src="images/img_arrow_left.svg" alt="Back Arrow" className="h-[24px] w-[24px]" />
            <Text size="texts" as="p" className="self-end !font-gerbera !text-red-900_01">
              Назад
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <Img src="images/img_mutton_lamb_bir.png" alt="Product Image" className="h-[216px] object-cover" />
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-1 flex-col items-start">
                  <Text as="p" className="!text-gray-900">
                    Чикагей Нью Йорк
                  </Text>
                  <div className="flex flex-wrap items-center gap-3 self-stretch">
                    <Text as="p" className="!text-red-900_e5">
                      260 P
                    </Text>
                    <Text size="desktop_body_m" as="p" className="self-end !text-blue_gray-400_e5">
                      50 грамм
                    </Text>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <Img src="images/img_add_circle_outline.svg" alt="Decrease Quantity" className="h-[24px] w-[24px]" />
                  <Text as="p" className="ml-4 !text-red-900">
                    1
                  </Text>
                  <Img src="images/img_add_circle_outline_red_900.svg" alt="Increase Quantity" className="ml-4 h-[24px] w-[24px]" />
                </div>
              </div>
              <Text size="textxs" as="p" className="!font-gerbera leading-[13px] !text-ui-gray_60">
                классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира.
              </Text>
            </div>
          </div>
          <Button className="flex h-[48px] flex-row items-center justify-center self-stretch rounded-[10px] bg-green-a700 px-[34px] text-center text-[16px] text-white-a700 sm:px-5">
            Добавлено
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}