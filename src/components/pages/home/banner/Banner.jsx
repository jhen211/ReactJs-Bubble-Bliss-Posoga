import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-pink-100 py-20">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-center">
                Discover the
                <span className="bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">
                  Joy
                </span>
                of Milk Tea{" "}
              </h1>
              <p className="mt-3 mb-5 ml-40 text-gray-600 text-sm">
                Creamy, sweet, and refreshing- our milk tea will transport you
                to flavor paradise with every sip.
              </p>
              <a
                href="#"
                className="btn bg-pink-500 rounded-full py-2
             px-4 text-white inline-block ml-40"
              >
                Explore Flavors
              </a>
            </div>
            <div className="text-8xl text-center">
              <p className="border-pink-300">🧋</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
