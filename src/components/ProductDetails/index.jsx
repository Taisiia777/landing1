

// import { Button, Text, Img } from "../../components";
// import React from "react";

// export default function ProductDetails({
//   productImage = "images/img_mutton_lamb_bir.png",
//   productName = "Чизкейк Нью Йорк",
//   productPrice = "260 ₽",
//   productWeight = "50 грамм",
//   productDescription = "Классическое блюдо американской кухни, которое прочно вошло в меню кафеек всего мира. Его достаточно просто.",
//   addToCartButton = "В КОРЗИНУ",
//   viewDetailsButton = "ПОДРОБНЕЕ",
//   onViewDetails,
//   onAddToCart,
//   ...props
// }) {
//   return (
//     <div {...props} className={`${props.className} flex flex-col w-full gap-6 py-6 sm:py-5 bg-white-a700 shadow-xs rounded-[10px]`}>
//       <div className="flex flex-col gap-3.5 self-stretch">
//         <Img src={productImage} alt="Dish Image" className="h-[200px] object-cover" />
//         <div className="flex flex-col gap-1.5">
//           <div className="flex flex-col items-start">
//             <Text size="desktop_h3" as="p" className="!text-gray-900">
//               {productName}
//             </Text>
//             <div className="relative mt-[-4px] flex flex-wrap items-center gap-3 self-stretch">
//               <Text size="desktop_h3" as="p" className="!text-red-900_e5">
//                 {productPrice}
//               </Text>
//               <Text size="desktop_body_m" as="p" className="mb-1.5 self-end !text-blue_gray-400_e5">
//                 {productWeight}
//               </Text>
//             </div>
//           </div>
//           <Text size="desktop_body_m" as="p" className="w-[90%] leading-4 !text-ui-gray_60">
//             {productDescription}
//           </Text>
//         </div>
//       </div>
//       <div className="mx-6 flex flex-col gap-2 self-stretch">
//         <Button 
//           className="flex h-[48px] flex-row items-center justify-center self-stretch rounded-[10px] bg-red-900 px-[34px] text-center text-[16px] text-white-a700 sm:px-5"
//           onClick={onAddToCart}
//         >
//           {addToCartButton}
//         </Button>
//         <Button 
//           onClick={onViewDetails} 
//           className="flex h-[48px] flex-row items-center justify-center self-stretch rounded-[10px] border border-solid border-red-900 px-[33px] text-center text-[16px] text-red-900 sm:px-5"
//         >
//           {viewDetailsButton}
//         </Button>
//       </div>
//     </div>
//   );
// }
import { Button, Text, Img } from "../../components";
import React from "react";

export default function ProductDetails({
  productImage,
  productName,
  productPrice,
  productWeight,
  productDescription,
  addToCartButton,
  viewDetailsButton,
  onViewDetails,
  onAddToCart,
  ...props
}) {
  return (
    <div className={`flex flex-col w-full gap-6 py-6 sm:py-5 bg-white-a700 shadow-xs rounded-[10px] ${props.className}`}>
      <div className="flex flex-col gap-3.5 self-stretch">
        <Img src={productImage} alt="Dish Image" className="h-[200px] object-cover" />
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col items-start">
            <Text size="desktop_h3" as="p" className="!text-gray-900">
              {productName}
            </Text>
            <div className="relative mt-[-4px] flex flex-wrap items-center gap-3 self-stretch">
              <Text size="desktop_h3" as="p" className="!text-red-900_e5">
                {productPrice}
              </Text>
              <Text size="desktop_body_m" as="p" className="mb-1.5 self-end !text-blue_gray-400_e5">
                {productWeight}
              </Text>
            </div>
          </div>
          <Text size="desktop_body_m" as="p" className="w-[90%] leading-4 !text-ui-gray_60">
            {productDescription}
          </Text>
        </div>
      </div>
      <div className="mx-6 flex flex-col gap-2 self-stretch">
        <Button 
          className="flex h-[48px] flex-row items-center justify-center self-stretch rounded-[10px] bg-red-900 px-[34px] text-center text-[16px] text-white-a700 sm:px-5"
          onClick={onAddToCart}
        >
          {addToCartButton}
        </Button>
        <Button 
          onClick={onViewDetails} 
          className="flex h-[48px] flex-row items-center justify-center self-stretch rounded-[10px] border border-solid border-red-900 px-[33px] text-center text-[16px] text-red-900 sm:px-5"
        >
          {viewDetailsButton}
        </Button>
      </div>
    </div>
  );
}
