import { Img, Text } from "../../components";
import React from "react";

export default function ProductDetails({
  productName = "Чизкейк Нью Йорк",
  productPrice = "260 ₽",
  previousPrice = "50 грамм",
  productQuantity = "1",
  ...props
}) {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div {...props} className={`${props.className} flex md:flex-col items-center p-2 bg-white-a700 shadow-xs flex-1 rounded-[10px] container-xs`}>
      <div className="flex flex-1 md:self-stretch">
        <div className="flex flex-col items-start">
          <Text as="p" className="!text-gray-900">
            {productName}
          </Text>
          <div className="flex flex-wrap items-center gap-3 self-stretch">
            <Text as="p" className="!text-red-900_e5">
              {productPrice}
            </Text>
            <Text size="desktop_body_m" as="p" className="self-end !text-blue_gray-400_e5">
              {previousPrice}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex w-[46%] justify-center">
        <div
          onClick={(event) => {
            event.stopPropagation();
            setQuantity((quantity) => (quantity < 1 ? 0 : quantity - 1));
          }}
          className="flex flex-1 cursor-pointer flex-col items-end"
        >
          <Img src="images/img_add_circle_outline.svg" alt="Decrement Icon" className="h-[24px] w-[24px]" />
        </div>
        <Text as="p" className="ml-4 !text-red-900">{quantity}</Text>
        <div
          onClick={(event) => {
            event.stopPropagation();
            setQuantity((quantity) => quantity + 1);
          }}
          className="flex cursor-pointer flex-col items-end"
        >
          <Img src="images/img_add_circle_outline_red_900.svg" alt="Increment Icon" className="h-[24px] w-[24px]" />
        </div>
      </div>
    </div>
  );
}
