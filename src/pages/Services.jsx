import React from "react";
import WrapperWhatWeOffer from "../components/WrapperWhatWeOffer";
import { PageTitle } from "../components/PageTitle";

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
          <div className="sticky top-[4rem] bg-gradient-to-br from-gray-50 via-white to-gray-100 z-10 ">
            <PageTitle pageTitle="SERVICES" />
          </div>

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
        <div className="sticky top-[4rem] bg-white z-10 w-[100%]">
          <PageTitle pageTitle="WHAT WE OFFER!" />
        </div>

        <WrapperWhatWeOffer />
      </section>
    </>
  );
};

export default Services;
