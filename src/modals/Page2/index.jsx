






// import { Button, Text, Img } from "../../components";
// import React, { useContext, useState } from "react";
// import { default as ModalProvider } from "react-modal";
// import { CartContext } from '../../CartContext';

// export default function Page2({ isOpen, onRequestClose, product }) {
//   const [quantity, setQuantity] = React.useState(1);
//   const { cartItems, addToCart } = useContext(CartContext);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [showFlyImage, setShowFlyImage] = useState(false);

//   const isInCart = cartItems.some(item => item.productName === product.productName);

//   const handleAddToCart = () => {
//     if (!isInCart) {
//       setShowFlyImage(true); // Запуск анимации
//       setIsAnimating(true); // Запуск анимации

//       // Добавление в корзину после анимации
//       setTimeout(() => {
//         addToCart({ ...product, quantity });
//         setIsAnimating(false); // Остановка анимации
//         setShowFlyImage(false);
//         onRequestClose(); // Закрытие попапа после добавления в корзину
//       }, 1000); // Длительность анимации
//     }
//   };

//   return (
// <ModalProvider
//   isOpen={isOpen}
//   onRequestClose={onRequestClose}
//   className={`w-full max-w-[400px] md:w-[90%] md:h-auto md:max-h-[90%] ${showFlyImage ? 'fly-image' : ''} desktop-popup`} // Добавлен класс desktop-popup для десктопной версии
//   appElement={document.getElementById("root")}
//   shouldCloseOnOverlayClick={true}
// >
//   <div className="container-xs flex justify-center px-14 md:p-5 md:px-5">
//     <div className="flex flex-col gap-5 rounded-[10px] bg-white-a700 p-4 md:w-full relative">
//       <div
//         className="flex items-center gap-2 cursor-pointer"
//         onClick={onRequestClose}
//       >
//         <Img src="images/img_arrow_left.svg" alt="Back Arrow" className="h-[24px] w-[24px]" />
//         <Text size="texts" as="p" className="self-end !font-gerbera !text-red-900_01">
//           Назад
//         </Text>
//       </div>
//       <div className="flex flex-col gap-4">
//         <Img
//           src={product.productImage}
//           alt="Product Image"
//           className={`h-[216px] object-cover w-full`} // добавлено w-full для ширины
//         />
//         <div className="flex flex-col gap-2">
//           <div className="flex items-center justify-between gap-5">
//             <div className="flex flex-1 flex-col items-start">
//               <Text as="p" className="!text-gray-900">
//                 {product.productName}
//               </Text>
//               <div className="flex flex-wrap items-center gap-3 self-stretch">
//                 <Text as="p" className="!text-red-900_e5">
//                   {product.productPrice}
//                 </Text>
//                 <Text size="desktop_body_m" as="p" className="self-end !text-blue_gray-400_e5">
//                   {product.productWeight}
//                 </Text>
//               </div>
//             </div>
//             <div className="flex w-[40%] justify-center">
//               <div
//                 onClick={(event) => {
//                   event.stopPropagation();
//                   setQuantity((quantity) => (quantity < 1 ? 0 : quantity - 1));
//                 }}
//                 className="flex flex-1 cursor-pointer flex-col items-end"
//               >
//                 <Img src="images/img_add_circle_outline.svg" alt="Minus Icon" className="h-[24px] w-[24px]" />
//                 <Text as="p" className="ml-4 !text-red-900">
//                   {quantity}
//                 </Text>
//               </div>
//               <div
//                 onClick={(event) => {
//                   event.stopPropagation();
//                   setQuantity((quantity) => quantity + 1);
//                 }}
//                 className="flex cursor-pointer flex-col items-end"
//               >
//                 <Img src="images/img_add_circle_outline_red_900.svg" alt="Plus Icon" className="h-[24px] w-[24px]" />
//               </div>
//             </div>
//           </div>
//           <Text size="textxs" as="p" className="!font-gerbera leading-[13px] !text-ui-gray_60">
//             {product.productDescription}
//           </Text>
//         </div>
//       </div>
//       <Button
//         className={`flex h-[48px] flex-row items-center justify-center self-stretch rounded-[10px] px-[34px] text-center text-[16px] text-white-a700 sm:px-5 ${
//           isInCart ? 'bg-green-700' : 'bg-[#B52926]'
//         }`}
//         onClick={handleAddToCart}
//         disabled={isAnimating} // Блокировка кнопки во время анимации
//       >
//         {isInCart ? 'Добавлено' : 'В корзину'}
//       </Button>
//     </div>
//   </div>
// </ModalProvider>

//   );
// }

import { Button, Text, Img } from "../../components";
import React, { useContext, useState } from "react";
import { default as ModalProvider } from "react-modal";
import { CartContext } from '../../CartContext';

export default function Page2({ isOpen, onRequestClose, product }) {
  const [quantity, setQuantity] = React.useState(1);
  const { cartItems, addToCart } = useContext(CartContext);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFlyImage, setShowFlyImage] = useState(false);

  const isInCart = cartItems.some(item => item.productName === product.productName);

  const handleAddToCart = () => {
    if (!isInCart) {
      setShowFlyImage(true); // Запуск анимации
      setIsAnimating(true); // Запуск анимации

      // Добавление в корзину после анимации
      setTimeout(() => {
        addToCart({ ...product, quantity });
        setIsAnimating(false); // Остановка анимации
        setShowFlyImage(false);
        onRequestClose(); // Закрытие попапа после добавления в корзину
      }, 1000); // Длительность анимации
    }
  };

  return (
    <ModalProvider
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`w-full max-w-[400px] md:w-[90%] md:h-auto md:max-h-[90%] ${showFlyImage ? 'fly-image' : ''} desktop-popup`}
      appElement={document.getElementById("root")}
      shouldCloseOnOverlayClick={true}
    >
      <div className="container-xs flex justify-center px-14 md:p-5 md:px-5">
        <div className="flex flex-col gap-5 rounded-[10px] bg-white-a700 p-4 md:w-full relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={onRequestClose}
          >
            <Img src="images/img_arrow_left.svg" alt="Back Arrow" className="h-[24px] w-[24px]" />
            <Text size="texts" as="p" className="self-end !font-gerbera !text-red-900_01">
              Назад
            </Text>
          </div>
          <div className="flex flex-col gap-4">
            <Img
              src={product.productImage}
              alt="Product Image"
              className={`h-[216px] object-cover w-full`}
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-1 flex-col items-start">
                  <Text as="p" className="!text-gray-900">
                    {product.productName}
                  </Text>
                  <div className="flex flex-wrap items-center gap-3 self-stretch">
                    <Text as="p" className="!text-red-900_e5">
                      {product.productPrice}
                    </Text>
                    <Text size="desktop_body_m" as="p" className="self-end !text-blue_gray-400_e5">
                      {product.productWeight}
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div
                    onClick={(event) => {
                      event.stopPropagation();
                      setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1));
                    }}
                    className="cursor-pointer flex items-center justify-center"
                  >
                    <Img src="images/img_add_circle_outline.svg" alt="Minus Icon" className="h-[24px] w-[24px]" />
                  </div>
                  <Text as="p" className="text-[#B42926] text-[16px]" style={{color: '#B42926'}}>
                    {quantity}
                  </Text>
                  <div
                    onClick={(event) => {
                      event.stopPropagation();
                      setQuantity((quantity) => quantity + 1);
                    }}
                    className="cursor-pointer flex items-center justify-center"
                  >
                    <Img src="images/img_add_circle_outline_red_900.svg" alt="Plus Icon" className="h-[24px] w-[24px]" />
                  </div>
                </div>
              </div>
              <Text size="textxs" as="p" className="!font-gerbera leading-[13px] !text-ui-gray_60">
                {product.productDescription}
              </Text>
            </div>
          </div>
          <Button
            className={`flex h-[48px] flex-row items-center justify-center self-stretch rounded-[10px] px-[34px] text-center text-[16px] text-white-a700 sm:px-5 ${
              isInCart ? 'bg-green-700' : 'bg-[#B52926]'
            }`}
            onClick={handleAddToCart}
            disabled={isAnimating}
          >
            {isInCart ? 'Добавлено' : 'В корзину'}
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}
