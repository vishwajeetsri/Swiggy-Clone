import React from "react";

const RestCard = ({ infoRest }) => {
  return (
    <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95  ">
      <img
        className="w-64 h-44 object-cover rounded-2xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          infoRest?.info?.cloudinaryImageId
        }
        alt=""
      />
      <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-lg">{infoRest?.info?.name}</div>
        <div className="flex items-center gap-2">
          <svg className=""
            xmlns="http://www.w3.org/2000/svg"
            fill="#1d933d"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="text-lg">{infoRest?.info?.avgRating}•</span>
          <span className="font-bold">{infoRest?.info?.sla?.slaString}</span>
        </div>
        <div>{infoRest?.info?.cuisines}</div>
      </div>
    </div>
  );
};

export default RestCard;
