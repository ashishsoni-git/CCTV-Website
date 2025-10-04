import React, { useState } from "react";

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
    alert("Submitted");
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 w-full min-h-screen flex justify-center items-center px-4 pt-24">
      <div className="w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[#050748] mb-6">
          CONTACT US
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col gap-y-2"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Your Name
            </label>
            <input
              required
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Your Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Phone Number
            </label>
            <input
              required
              type="text"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Message
            </label>
            <textarea
              required
              name="message"
              value={data.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full h-28 sm:h-32 border rounded-lg p-3 sm:p-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          <button
            type="submit"
            className="self-center mt-4 w-full sm:w-40 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
