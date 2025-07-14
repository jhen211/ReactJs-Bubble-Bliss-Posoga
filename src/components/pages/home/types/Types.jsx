import React from "react";
import CardTypes from "../../../partials/CardTypes";

const Types = () => {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <div>
            <h1 className="font-bold text-2xl text-center ">
              Popular
              <span className="m-2 bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">
                Milk Tea
              </span>
              Types{" "}
            </h1>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-5 m-32 ">
          {/* CardTypes */}
          <CardTypes
            emojiBg={"bg-pink-100"}
            emoji={"🥛"}
            flavor={"Classic Milk Tea"}
            description={
              "The original blend of black tea, milk and sweetness that started at all."
            }
          />

          {/* CardTypes */}
          <CardTypes
            emojiBg={"bg-pink-100"}
            emoji={"🍯"}
            flavor={"Honeydew Milk Tea"}
            description={
              "Refreshing melon flavor combined with creamy milk for a summer favorite."
            }
          />

          {/* CardTypes */}
          <CardTypes
            emojiBg={"bg-pink-100"}
            emoji={"🍵"}
            flavor={"Matcha Milk Tea"}
            description={
              "Earthy green tea powder blended with milk for an antioxidant boost."
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Types;
