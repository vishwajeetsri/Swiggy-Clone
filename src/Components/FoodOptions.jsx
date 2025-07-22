import React from "react";
import { imageGridCard } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

const FoodOptions = () => {
  return (
    <div className="max-w-[80%] container mx-auto flex flex-wrap mt-20">
      {imageGridCard.map((foodData) => {
        return <FoodCard key={foodData.id} foodData={foodData}></FoodCard>;
      })}
    </div>
  );
};

export default FoodOptions;
