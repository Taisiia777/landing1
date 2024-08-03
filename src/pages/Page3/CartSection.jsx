




// import React, { useContext, useState } from 'react';
// import { CartContext } from '../../../src/CartContext';
// import { Button, Text, Heading } from "../../components";
// import ProductDetails1 from "../../components/ProductDetails1";

// export default function CartSection() {
//   const { cartItems, updateQuantity } = useContext(CartContext);
//   const [showModal, setShowModal] = useState(false);
//   const [orderData, setOrderData] = useState({
//     customerName: '',
//     customerAddress: '',
//     customerPhone: ''
//   });

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderData({ ...orderData, [name]: value });
//   };


//   const handleOrderSubmit = async () => {
//     const orderItems = cartItems.map(item => ({
//       productName: item.productName,
//       productPrice: parseInt(item.productPrice.replace(/\D/g, ''), 10), // Преобразование цены в число
//       quantity: parseInt(item.quantity, 10) // Преобразование количества в число
//     }));

//     const fullOrderData = {
//         ...orderData,
//         products: orderItems
//     };
//     console.log(JSON.stringify(orderItems));
//     try {
//         const response = await fetch('http://localhost:5000/api/orders', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(fullOrderData),
//         });
//         if (response.ok) {
//             alert('Order placed successfully!');
//             handleClose();
//         } else {
//             alert('Failed to place order.');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred. Please try again.');
//     }
// };
//   return (
//     <>
//       <div className="flex flex-col items-center">
//         <div className="container-xs flex flex-col items-start gap-5 md:p-5">
//           <Heading as="h1">Корзина</Heading>
//           <div className="flex flex-col gap-10 self-stretch">
//             <div className="flex flex-col gap-4">
//             {cartItems.length > 0 ? (
//                 cartItems.map((item, index) => (
//                   <ProductDetails1 
//                     key={`cartItem-${index}`}
//                     productName={item.productName}
//                     productPrice={item.productPrice}
//                     previousPrice={item.previousPrice}
//                     productQuantity={item.quantity}
//                     updateQuantity={updateQuantity}
//                   />
//                 ))
//               ) : (
//                 <Text as="p">Ваша корзина пуста</Text>
//               )}
//             </div>
//             <div className="flex items-center justify-center rounded-[10px] bg-red-900 p-3 shadow-xs md:flex-col">
//               <div className="flex-1 md:self-stretch">
//                 <div className="flex flex-col items-start">
//                   <Text as="p">К оплате</Text>
//                   <Text as="p" className="!text-white-a700_e5">
//                     {cartItems.reduce((total, item) => total + parseFloat(item.productPrice) * item.quantity, 0)} ₽
//                   </Text>
//                 </div>
//               </div>
//               <Button onClick={handleShow} className="flex h-[48px] min-w-[202px] flex-row items-center justify-center rounded-[10px] bg-white-a700 px-[34px] text-center text-[16px] text-red-900 md:p-5 sm:px-5">
//                 Оформить заказ
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fff] bg-opacity-30">
//         <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] bg-[#fff] max-w-lg">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold">Оформление заказа</h2>
//               <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">&times;</button>
//             </div>
//             <form className="mt-4 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Имя клиента</label>
//                 <input
//                   type="text"
//                   name="customerName"
//                   value={orderData.customerName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Введите имя"
//                 />
//               </div>
//               {/* <div>
//                 <label className="block text-sm font-medium text-gray-700">Адрес</label>
//                 <input
//                   type="text"
//                   name="customerAddress"
//                   value={orderData.customerAddress}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Введите адрес"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Телефон</label>
//                 <input
//                   type="text"
//                   name="customerPhone"
//                   value={orderData.customerPhone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Введите телефон"
//                 />
//               </div> */}
//               <div className="flex justify-end">
//                 <Button
//                   type="button"
//                   onClick={handleOrderSubmit}
//                   className="bg-red-900 text-white rounded-lg py-2 px-4 hover:bg-red-700 text-[#fff]"
//                 >
//                   Отправить заказ
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



import React, { useContext, useState } from 'react';
import { CartContext } from '../../../src/CartContext';
import { Button, Text, Heading } from "../../components";
import ProductDetails1 from "../../components/ProductDetails1";

export default function CartSection() {
  const { cartItems, updateQuantity } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // Новый попап
  const [orderData, setOrderData] = useState({
    customerName: '',
    customerAddress: '',
    customerPhone: ''
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleOrderSubmit = async () => {
    const orderItems = cartItems.map(item => ({
      productName: item.productName,
      productPrice: parseInt(item.productPrice.replace(/\D/g, ''), 10), // Преобразование цены в число
      quantity: parseInt(item.quantity, 10) // Преобразование количества в число
    }));

    const fullOrderData = {
        ...orderData,
        products: orderItems
    };
    console.log(JSON.stringify(orderItems));
    try {
        const response = await fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fullOrderData),
        });
        if (response.ok) {
            setShowModal(false);
            setShowConfirmationModal(true); // Показать второй попап
        } else {
            alert('Failed to place order.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
  };

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
              <Button onClick={handleShow} className="flex h-[48px] min-w-[202px] flex-row items-center justify-center rounded-[10px] bg-white-a700 px-[34px] text-center text-[16px] text-red-900 md:p-5 sm:px-5">
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fff] bg-opacity-30">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] bg-[#fff] max-w-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Оформление заказа</h2>
              <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Имя клиента</label>
                <input
                  type="text"
                  name="customerName"
                  value={orderData.customerName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Введите имя"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={handleOrderSubmit}
                  className="bg-red-900 text-white rounded-lg py-2 px-4 hover:bg-red-700 text-[#fff]"
                >
                  Отправить заказ
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showConfirmationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fff] bg-opacity-30">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] bg-[#fff] max-w-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Перейти к оплате</h2>
              <button onClick={() => setShowConfirmationModal(false)} className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <div className="mt-4 space-y-4">
              <Text as="p">Вы уверены, что хотите перейти к оплате?</Text>
              <div className="flex justify-end gap-4">
              <Button
  type="button"
  onClick={() => {
    setShowConfirmationModal(false);
    // Здесь можно добавить логику для перехода к оплате
  }}
  className="bg-[#B42926] text-white rounded-lg py-2 px-4 hover:bg-opacity-90" style={{color:'#fff'}}
>
  Да
</Button>
<Button
  type="button"
  onClick={() => setShowConfirmationModal(false)}
  className="bg-white text-[#B42926] rounded-lg py-2 px-4 hover:bg-gray-100 border border-[#B42926]"
>
  Нет
</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
