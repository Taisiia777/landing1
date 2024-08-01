import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";
import CartSection from "./CartSection";
import React from "react";

export default function Page3Page() {
  return (
    <>
      <Helmet>
        <title>Checkout Cart - Order Your Favorite Desserts Online</title>
        <meta
          name="description"
          content="Complete your purchase with our easy checkout cart. Featuring delicious desserts like Cheesecake New York, Brownie Cake, Honey Cake, and Tiramisu. Order now and indulge in the sweetness!"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[50px] bg-white-a700">
        <div className="container-xs mt-[54px] md:p-5">
          <Header2 className="md:gap-[68px] sm:gap-[34px]" />
        </div>
        <div className="flex flex-col gap-[108px] self-stretch md:gap-[81px] sm:gap-[54px]">
          {/* cart section */}
          <CartSection />
          <Footer className="bg-[url(/public/images/img_frame_13_red_900_01.png)]" />
        </div>
      </div>
    </>
  );
}

