// import { Button, Text, Heading } from "../../components";
// import ProductDetails1 from "../../components/ProductDetails1";
// import React, { Suspense } from "react";

// const cartItemList = [
//   { productName: "Чизкейк Нью Йорк", productPrice: "260 ₽ ", previousPrice: "50 грамм", productQuantity: "1" },
//   { productName: "Торт Брауни", productPrice: "260 ₽ ", previousPrice: "50 грамм", productQuantity: "99" },
//   { productName: "Торт Медовик", productPrice: "260 ₽ ", previousPrice: "50 грамм", productQuantity: "2" },
//   { productName: "Тирамису", productPrice: "260 ₽ ", previousPrice: "50 грамм", productQuantity: "15" },
// ];

// export default function CartSection() {
//   return (
//     <>
//       {/* cart section */}
//       <div className="flex flex-col items-center">
//         <div className="container-xs flex flex-col items-start gap-5 md:p-5">
//           <Heading as="h1">Корзина</Heading>
//           <div className="flex flex-col gap-10 self-stretch">
//             <div className="flex flex-col gap-4">
//               <Suspense fallback={<div>Loading feed...</div>}>
//                 {cartItemList.map((d, index) => (
//                   <ProductDetails1 {...d} key={"itemsList" + index} />
//                 ))}
//               </Suspense>
//             </div>
//             <div className="flex items-center justify-center rounded-[10px] bg-red-900 p-3 shadow-xs md:flex-col">
//               <div className="flex-1 md:self-stretch">
//                 <div className="flex flex-col items-start">
//                   <Text as="p">К оплате</Text>
//                   <Text as="p" className="!text-white-a700_e5">
//                     9 999 999 ₽{" "}
//                   </Text>
//                 </div>
//               </div>
//               <Button className="flex h-[48px] min-w-[202px] flex-row items-center justify-center rounded-[10px] bg-white-a700 px-[34px] text-center text-[16px] text-red-900 md:p-5 sm:px-5">
//                 Оформить заказ
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import { Button, Text, Heading } from "../../components";
// import ProductDetails1 from "../../components/ProductDetails1";
// import React, { Suspense } from "react";

// export default function CartSection({ cartItems = [] }) {
//   return (
//     <>
//       <div className="flex flex-col items-center">
//         <div className="container-xs flex flex-col items-start gap-5 md:p-5">
//           <Heading as="h1">Корзина</Heading>
//           <div className="flex flex-col gap-10 self-stretch">
//             <div className="flex flex-col gap-4">
//               <Suspense fallback={<div>Loading feed...</div>}>
//                 {cartItems.map((d, index) => (
//                   <ProductDetails1 {...d} key={"itemsList" + index} />
//                 ))}
//               </Suspense>
//             </div>
//             <div className="flex items-center justify-center rounded-[10px] bg-red-900 p-3 shadow-xs md:flex-col">
//               <div className="flex-1 md:self-stretch">
//                 <div className="flex flex-col items-start">
//                   <Text as="p">К оплате</Text>
//                   <Text as="p" className="!text-white-a700_e5">
//                     {cartItems.reduce((total, item) => total + parseFloat(item.productPrice), 0)} ₽
//                   </Text>
//                 </div>
//               </div>
//               <Button className="flex h-[48px] min-w-[202px] flex-row items-center justify-center rounded-[10px] bg-white-a700 px-[34px] text-center text-[16px] text-red-900 md:p-5 sm:px-5">
//                 Оформить заказ
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useContext } from 'react';
import { CartContext } from '../../../src/CartContext';
import { Button, Text, Heading } from "../../components";
import ProductDetails1 from "../../components/ProductDetails1";

export default function CartSection() {
  const { cartItems, updateQuantity } = useContext(CartContext); 

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-5 md:p-5">
          <Heading as="h1">Корзина</Heading>
          <div className="flex flex-col gap-10 self-stretch">
            <div className="flex flex-col gap-4">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <ProductDetails1 
                    key={`cartItem-${index}`}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    previousPrice={item.previousPrice}
                    productQuantity={item.quantity}
                    updateQuantity={updateQuantity}
                  />
                ))
              ) : (
                <Text as="p">Ваша корзина пуста</Text>
              )}
            </div>
            <div className="flex items-center justify-center rounded-[10px] bg-red-900 p-3 shadow-xs md:flex-col">
              <div className="flex-1 md:self-stretch">
                <div className="flex flex-col items-start">
                  <Text as="p">К оплате</Text>
                  <Text as="p" className="!text-white-a700_e5">
                    {cartItems.reduce((total, item) => total + parseFloat(item.productPrice) * item.quantity, 0)} ₽
                  </Text>
                </div>
              </div>
              <Button className="flex h-[48px] min-w-[202px] flex-row items-center justify-center rounded-[10px] bg-white-a700 px-[34px] text-center text-[16px] text-red-900 md:p-5 sm:px-5">
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
