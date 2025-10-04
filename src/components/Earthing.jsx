import React from "react";

const Earthing = () => {
  return (
    <div className="flex flex-col gap-6 justify-center p-6 md:p-16">

      <p className="text-3xl md:text-5xl font-extrabold text-[#050748] text-center md:text-left">
        EARTHING
      </p>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/2/ZG/NG/AK/3370609/electrical-contractor-service.jpg"
          alt="earthing_image"
          className="w-full max-w-md lg:max-w-lg rounded-lg shadow-md object-cover"
        />

        <div className="flex flex-col gap-4 text-center lg:text-left">
          <p className="text-xl md:text-2xl font-semibold text-[#050748]">
            Why Earthing Required?
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            accusantium soluta pariatur at, culpa maiores reprehenderit!
            Consequatur nobis consequuntur dolorum, inventore accusamus hic,
            error laboriosam unde enim quia non esse! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Assumenda accusantium soluta pariatur
            at, culpa maiores reprehenderit! Consequatur nobis consequuntur
            dolorum, inventore accusamus hic, error laboriosam unde enim quia
            non esse!
          </p>

          <button
            type="button"
            className="mx-auto lg:mx-0 mt-4 w-40 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            ENQUIRY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Earthing;
