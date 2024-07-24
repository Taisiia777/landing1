import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Heading } from "../../components";
import ProductDetails from "../../components/ProductDetails";
import React, { Suspense } from "react";

const dessertMenuGrid = [
  {
    productImage: "images/img_mutton_lamb_bir.png",
    productName: "Чизкейк Нью Йорк",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_200x252.png",
    productName: "Торт Брауни",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_1.png",
    productName: "Торт Медовик",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_2.png",
    productName: "Тирамису",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_3.png",
    productName: "Торт Кофейный",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_4.png",
    productName: "Ореховый",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_5.png",
    productName: "Триумфальный",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_6.png",
    productName: "Великолепный",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_7.png",
    productName: "Сладкая любовь",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_8.png",
    productName: "Медовый фул-хаос",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_9.png",
    productName: "Аппетитный",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
  {
    productImage: "images/img_mutton_lamb_bir_10.png",
    productName: "Восторг Василия",
    productPrice: "260 р",
    productWeight: "50 грамм",
    productDescription: "классическое блюдо американской кухни, которое прочно вошло в меню кафешек всего мира. Его достаточно просто.",
    addToCartButton: "В КОРЗИНУ",
    viewDetailsButton: "ПОДРОБНЕЕ",
  },
];

export default function MainMenuSection() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      {/* main menu section */}
      <div className="flex-col items-center">
        <div className="container-xs flex flex-col items-start md:p-5">
          <Heading as="h1">Меню</Heading>
          <div className="mt-[30px] flex gap-6 self-stretch md:flex-col">
            <Input
              name="Search Field"
              placeholder="Поиск"
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              prefix={<Img src="images/img_search.svg" alt="Search" className="h-[16px] w-[16px] cursor-pointer" />}
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} fillColor="#b42926ff" />
                ) : null
              }
              className="flex h-[48px] flex-grow items-center justify-center gap-4 rounded-[10px] bg-gray-200 pl-6 pr-[34px] font-gerbera text-[16px] text-red-900 sm:px-5"
            />
            <Button className="flex h-[48px] min-w-[192px] flex-row items-center justify-center rounded-[10px] bg-red-900 px-[34px] text-center text-[16px] text-white-a700 sm:px-5">
              Найти
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-6 gap-y-6 self-stretch md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {dessertMenuGrid.map((d, index) => (
                <ProductDetails {...d} key={"mainGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
