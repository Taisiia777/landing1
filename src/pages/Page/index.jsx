import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainMenuSection from "./MainMenuSection";
import React from "react";

export default function PagePage() {
  return (
    <>
      <Helmet>
        <title>Main Menu - Explore Classic American Desserts</title>
        <meta
          name="description"
          content="Discover our Main Menu featuring classic American desserts like New York Cheesecake, Brownie Cake, and Tiramisu. Indulge in the rich flavors that have become a staple in cafes worldwide."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[100px] bg-white-a700 md:gap-[75px] sm:gap-[50px]">
        <div>
          <div className="flex h-[344px] items-end justify-center bg-red-900 bg-[url(/public/images/img_frame_2.png)] bg-cover bg-no-repeat py-10 md:h-auto sm:py-5">
            <div className="container-xs mt-3 flex justify-center md:p-5">
              <Header className="w-full md:gap-[68px] sm:gap-[34px]" />
            </div>
          </div>
        </div>

        {/* main menu section */}
        <MainMenuSection />
        <Footer className="bg-[url(/public/images/img_frame_13.png)]" />
      </div>
    </>
  );
}

