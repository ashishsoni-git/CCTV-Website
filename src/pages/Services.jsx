import React from "react";
import WrapperWhatWeOffer from "../components/WrapperWhatWeOffer";

const Services = () => {
  const services = [
    {
      title: "CCTV Camera Installation",
      desc: "Vision India Tech provides seamless camera installation for businesses and homes in Jaipur, ensuring efficient setup.",
      img: "https://orbitinfotech.com/images/service/CCTV%20Camera%20Installation.webp",
      alt: "cctv_installation",
    },
    {
      title: "CCTV Camera Price Consultation",
      desc: "Searching for the best CCTV camera price or price list in Jaipur? We guide you with cost-effective options tailored to your needs.",
      img: "https://orbitinfotech.com/images/service/CCTV%20Camera%20Price%20Consultation.webp",
      alt: "cctv_consultation",
    },
    {
      title: "Wi-Fi and Wireless CCTV Solutions",
      desc: "Our Wi-Fi & wireless CCTV solutions are perfect for modern spaces with minimal wiring requirements.",
      img: "https://orbitinfotech.com/images/service/Wi-Fi%20and%20Wireless%20CCTV%20Solutions.webp",
      alt: "cctv_solution",
    },
    {
      title: "Night Vision and IP Camera Systems",
      desc: "Enhance security with our night vision CCTV camera and advanced CCTV IP camera. You are assured of getting reliable footage, irrespective of lighting conditions.",
      img: "https://orbitinfotech.com/images/service/Night%20Vision%20and%20IP%20Camera%20Systems.webp",
      alt: "ip/night vision cctv camera",
    },
    {
      title: "Trusted Brands and Dealership",
      desc: "As leading CCTV camera dealers in Jaipur, we stock brands like cp plus CCTV camera, dahua CCTV camera, and Hikvision CCTV camera.",
      img: "https://orbitinfotech.com/images/service/Night%20Vision%20and%20IP%20Camera%20Systems%20(2).webp",
      alt: "trusted_brand",
    },
    {
      title: "Home Security Systems and Alarms",
      desc: "Beyond cameras, explore our home security system. This includes home security camera systems, burglar alarm, and a reliable security alarm system.",
      img: "https://orbitinfotech.com/images/service/Home%20Security%20Systems%20and%20Alarms.webp",
      alt: "home_security",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 mt-2">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#050748] flex justify-center  h-[8rem] pb-16">
            SERVICES
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col"
              >
                <img
                  src={service.img}
                  alt={service.alt}
                  className="rounded-t-2xl h-52 w-full object-cover"
                />
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <h3 className="text-xl font-semibold text-[#050748]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center ">
        <h3 className="text-3xl md:text-4xl font-extrabold text-center text-[#050748] flex justify-center h-[8rem] pt-8 ">
          What We Offer!
        </h3>

        <WrapperWhatWeOffer />
      </section>
    </>
  );
};

export default Services;
