import React from "react";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">

      <div className="absolute hero ">
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative xl:right-[20rem] max-w-2xl px-6 text-center z-10 ">
        <h1 className="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl ">
          <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent ">
            Vision India Tech
          </span>{" "}
          are The Best CCTV Camera Service Provider in Jaipur, Rajasthan
        </h1>

        <p className="mt-6 lg:text-lg md:text-[1.25rem] sm:text-[1rem] text-gray-200 ">
          We assist property owners in enhancing their security by offering
          multi-platform, easy-to-use CCTV camera services. CCTV cameras have
          become an essential part of ensuring security and surveillance in both
          residential and commercial spaces. Whether for residential or
          commercial purposes, having a reliable CCTV camera system in place
          provides peace of mind and enhances the safety of your premises.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleNavigate}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
