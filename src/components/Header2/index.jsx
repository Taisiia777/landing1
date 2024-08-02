import { Text, Img } from "./..";
  import React, { useContext, useState } from "react";
import { CartContext } from '../../../src/CartContext';

  export default function Header2({ ...props }) {
    const { cartItems, updateQuantity } = useContext(CartContext);

    return (
      <header {...props} className={`${props.className} flex flex-col items-start gap-[68px] bg-white`}> {/* Добавлен bg-white */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-start justify-between gap-5 w-full">
            <Img src="images/img_1_2.svg" alt="Header Logo" className="h-[30px] w-[6%] min-w-[60px] self-center" />
            <div className="flex justify-between gap-5">
              <Text size="desktop_body" as="p" className="text-[#000] whitespace-nowrap" style={{color: '#000'}}> {/* Установлен цвет текста */}
                +7 (999) 123-45-67
              </Text>
              <div className="flex gap-4" style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent:'center', height:'15px'}}>
                <div style={{width: '40px', height: '30px', borderRadius: '20px', color:'#fff', background: '#B42926', display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent:'center',}}>
                  {cartItems.length}
                </div>
                <div className="flex flex-col">
                  <a href="/cart">
                    <Img src="images/img_shopping_cart1.svg" alt="Cart Icon" className="h-[24px]" />
                  </a>
                </div>
                <Text size="desktop_body" as="p" className="text-[#000] whitespace-nowrap" style={{color: '#000'}}> {/* Установлен цвет текста */}
                  Корзина
                </Text>
              </div>
            </div>
          </div>
          <div className="h-px bg-[#000] w-full" /> {/* Установлен цвет подчеркивания */}
        </div>
      </header>
    );
  }
  