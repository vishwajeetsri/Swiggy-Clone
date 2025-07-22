import React from "react";
import { GroceryGridCards } from "../Utils/GroceryData";
import GroceryCard from "./GroceryCard";

const GroceryOption = () => {
  return (
    <div className="w-[80%] mt-20 container mx-auto">
      <h1 className="font-bold text-2xl">Shop Grocery on Instamart</h1>
    <div className=" container mx-auto flex flex-nowrap overflow-x-auto gap-9 mt-10">
      {GroceryGridCards.map((foodData) => {
        return (
          <GroceryCard key={foodData.id} foodData={foodData}>
            {" "}
          </GroceryCard>
        );
      })}
    </div>
      </div>
  );
};

export default GroceryOption;
