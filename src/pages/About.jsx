import React from "react";

const About = () => {
  const MockData = [
    {
      title:
        "ATS Global Tech: Your Trusted CCTV Camera Service Provider in Jaipur",
      desc: "ATS Global Tech has established itself as a reliable and customer-centric company in the field of CCTV camera services in Jaipur. With a team of skilled professionals and years of experience, they offer comprehensive solutions for all your security needs. Whether you need sales, installation, or repair services for CCTV cameras, ATS Global Tech has got you covered.",
    },
    {
      title:
        "CCTV Camera Service Provider in Jaipur",
      desc: "ATS Global Tech has established itself as a reliable and customer-centric company in the field of CCTV camera services in Jaipur.",
    },
    {
      title:
        "Your Trusted CCTV Camera Service Provider in Jaipur",
      desc: "ATS Global Tech has established itself as a reliable and customer-centric company in the field of CCTV camera services in Jaipur. With a team of skilled professionals and years of experience, they offer comprehensive solutions for all your security needs.",
    },
      {
      title:
        "CCTV Camera Service Provider in Jaipur, Rajasthan",
      desc: "ATS Global Tech has established itself as a reliable and customer-centric company in the field of CCTV camera services in Jaipur. With a team of skilled professionals and years of experience, they offer comprehensive solutions for all your security needs.",
    },
  ];
  return (
    <div className="py-16 flex flex-col justify-center items-center mt-2">
      <h1 className="text-4xl font-extrabold text-center text-[#050748]">
        ABOUT US
      </h1>
      <div className="py-10 w-[70%] flex flex-col gap-y-6">
        {MockData.map((data, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="text-[#050748] font-extrabold text-[1.8rem]">{data.title}</p>
            <p className="text-black">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
