import React from "react";
import { PageTitle } from "../components/PageTitle";
import { FaShieldAlt, FaCamera, FaUsers, FaTools } from "react-icons/fa";

const About = () => {
  const sections = [
    {
      icon: <FaShieldAlt size={28} className="text-orange-500" />,
      title: "Trusted & Reliable",
      desc: "Vision India Tech is a trusted CCTV, Lift, and Earthing service provider in Jaipur.",
    },
    {
      icon: <FaCamera size={28} className="text-orange-500" />,
      title: "CCTV Camera Experts",
      desc: "We provide sales, installation, and repair services for CCTV cameras.",
    },
    {
      icon: <FaTools size={28} className="text-orange-500" />,
      title: "Lift & Elevator Services",
      desc: "Comprehensive lift and elevator solutions, from installation to maintenance.",
    },
    {
      icon: <FaUsers size={28} className="text-orange-500" />,
      title: "Customer-Centric Approach",
      desc: "Our team prioritizes customer satisfaction, offering tailored solutions.",
    },
  ];
  const extraInfo = [
    {
      title: "Our Mission",
      desc: "To provide high-quality, reliable security and infrastructure solutions that make every space safe, efficient, and technologically advanced.",
    },
    {
      title: "Our Vision",
      desc: "To be the leading service provider in CCTV, Lift, and Earthing solutions across Rajasthan, trusted for innovation and excellence.",
    },
    {
      title: "Why Choose Us?",
      desc: "Expert team, prompt support, modern technology, and a proven track record of successful installations and satisfied clients.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen px-6 md:px-16 lg:px-28 pt-[1rem] flex flex-col gap-10 w-full">
      {/* Page Title */}
      <div className="sticky top-[4rem] z-10 bg-white py-3">
        <PageTitle pageTitle="ABOUT US" />
      </div>

      {/* Intro Section */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-gray-600 text-base md:text-lg">
          Vision India Tech is a leading service provider in CCTV cameras, Lift
          & Elevator systems, and Earthing solutions in Jaipur. Our mission is
          to provide safe, reliable, and modern solutions tailored to your
          needs.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div>{section.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-[#050748] mb-1">
                {section.title}
              </h3>
              <p className="text-gray-700">{section.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Information Section */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {extraInfo.map((info, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-[#050748] mb-2">
              {info.title}
            </h3>
            <p className="text-gray-700">{info.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA / Closing */}
      <div className="text-center mt-10">
        <p className="text-gray-700 text-base md:text-lg">
          Join hundreds of satisfied clients who trust Vision India Tech for
          their CCTV, Lift, and Earthing needs.{" "}
          <span className="font-semibold text-orange-500">
            Secure your space today!
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
