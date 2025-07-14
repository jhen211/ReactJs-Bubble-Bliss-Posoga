import React from "react";

const CardTypes = ({emojiBg, emoji, flavor, description }) => {
  return (
    <div className="bg-pink-50 shadow-xl py-4 px-2 mt-5 justify-items-center">
      <div className={`rounded-full p-3 ${emojiBg}`}>
        <p className="text-3xl">{emoji}</p>
      </div>
      <h4 className="text-lg font-bold my-3">{flavor}</h4>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default CardTypes;
