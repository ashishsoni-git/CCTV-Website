import React, { useState } from "react";
import { PageTitle } from "../components/PageTitle";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name: "", email: "", phone: "", message: "" });
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      <div className="sticky top-12 z-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 py-3 shadow-sm">
        <PageTitle pageTitle="CONTACT US" />
        <p className="text-gray-600 text-center text-sm md:text-base mt-1">
          Get in touch with us for CCTV, Lifts, and Earthing Solutions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-4 md:px-10 lg:px-16 pt-[3.2rem]">
        {/* Left: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-gray-100 overflow-auto"
        >
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="youremail@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                required
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                required
                name="message"
                value={data.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            <button
              type="submit"
              className=" w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-start bg-[#050748] text-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

          <div className="space-y-4 text-[14px] md:text-[15px]">
            <div>
              <p className="text-gray-300 text-xs uppercase tracking-wider mb-1">
                Address
              </p>
              <p className="font-medium">
                Vision India Tech
                <br /> Jaipur, Rajasthan, India
              </p>
            </div>

            <div>
              <p className="text-gray-300 text-xs uppercase tracking-wider mb-1">
                Phone
              </p>
              <p className="font-medium">+91 1234567890</p>
            </div>

            <div>
              <p className="text-gray-300 text-xs uppercase tracking-wider mb-1">
                Email
              </p>
              <p className="font-medium">visionindiatech@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-300 text-xs uppercase tracking-wider mb-1">
                Working Hours
              </p>
              <p className="font-medium">Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              We are here to help you with CCTV installations, Lift & Elevator
              setup, and Earthing solutions. Let’s make your space secure and
              efficient!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
