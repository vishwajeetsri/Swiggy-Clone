import React from "react";
import logo from "../assets/swiggy_logo_white.avif";
import logo1 from "../assets/Veggies_new.avif";
import logo2 from "../assets/Sushi_replace.avif";
import card1 from "../assets/card1.avif"
import card2 from "../assets/card2.avif"
import card3 from "../assets/card3.avif"

const Header = () => {
  return (
    <header className="bg-[#FF5200] font-serif">
      <div className="flex justify-between ml-32 mr-32 py-8">
        <img className="w-40 h-12" src={logo} alt="" />
        <div className="gap-8 flex items-center font-bold text-white">
          <a target="blank" href="https://www.swiggy.com/corporate/">
            Swiggy Corporate
          </a>
          <a target="blank" href="https://partner.swiggy.com/login#/swiggy">
            Partner with us
          </a>
          <a
            className="border border-white rounded-2xl py-3 px-4"
            target="blank"
            href=""
          >
            Get the App
          </a>
          <a
            className="border border-black bg-black  rounded-2xl py-3 px-4"
            target="blank"
            href=""
          >
            Sign in
          </a>
        </div>
      </div>
      <div className="pt-16 pb-8 relative">
        <img className="h-110 w-60 absolute top-0 left-0" src={logo1} alt="" />
        <img className="h-110 w-60 absolute top-0 right-0" src={logo2} alt="" />
        <div className="max-w-[60%] text-5xl font-bold text-center text-white container mx-auto">
          Order food & groceries. Discover best restaurants.Swiggy it!
        </div>
        <div className="max-w-[70%] flex gap-5 container mx-auto mt-5">
          <input
            className="px-4 py-4 w-[40%] text-xl list-none rounded-2xl"
            type="text"
            placeholder="Mayur Vihar"
          />
          <input
            className="px-6 py-4 w-[55%] text-xl list-none rounded-2xl"
            type="search"
            placeholder="Search for restaurant, item or more"
          />
        </div>
      </div>
      <div className="max-w-[80%] container mx-auto flex mt-5">
        <a href="https://www.swiggy.com/restaurants">
            <img src={card1} alt="" />
        </a>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            <img src={card2} alt="" />
        </a>
        <a href="https://www.swiggy.com/dineout">
            <img src={card3} alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
