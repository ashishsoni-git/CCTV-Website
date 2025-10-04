import React from "react";

const projects = [
  {
    title: "CCTV Camera Installation",
    desc: "We deliver state-of-the-art CCTV surveillance systems — installation, integration, and maintenance for homes, offices & industries.",
    img: "https://orbitinfotech.com/images/service/Why%20Orbit%20Infotech%20CCTV%20Service.webp",
  },
  {
    title: "Lift / Elevator Solutions",
    desc: "Modern lift & elevator systems—installation, automation, servicing. Ensuring safe & efficient vertical mobility for buildings.",
    img: "https://media.istockphoto.com/id/479362384/photo/machinist-with-spanner-adjusting-lift-mechanism.jpg?s=612x612&w=0&k=20&c=8cFocYabR5bYsJLLvWTkKgxJmBxqGd2_mLSIZDTtnIY=",
  },
  {
    title: "Earthing Solutions",
    desc: "Professional earthing & grounding services to safeguard equipment and people — complying with electrical safety standards.",
    img: "https://at3w.com/storage/EARTHING-REDIFUSION_WEB_EN-1170x520@2x.jpg",
  },
];

// Sample testimonial / stats data
const stats = [
  { label: "Successful Installations", value: 1200, icon: "✔️" },
  { label: "Happy Customers", value: 950, icon: "😊" },
  { label: "Years of Experience", value: 15, icon: "🏆" },
  { label: "Cities Covered", value: 20, icon: "📍" },
];

// Sample customer testimonials
const testimonials = [
  {
    name: "Rohit Singh",
    text: "Absolutely satisfied! The CCTV installation was flawless, and the team was professional.",
  },
  {
    name: "Meera Patel",
    text: "Elevator upgrade was done quickly, minimal downtime. Highly recommend!",
  },
  {
    name: "Arjun Verma",
    text: "Earthing work prevented issues in our building during storms. Great quality.",
  },
];

const Project = () => {
  return (
    <div className="w-full bg-gray-50 pb-20">
      {/* Hero / Banner Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center object-cover"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-illustration/security-camera-cctv-surveillance-cam-600nw-1283929756.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Projects & Services
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Excellence in CCTV | Lifts / Elevators | Earthing Solutions
          </p>
        </div>
      </div>

      {/* Services / Projects Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 mb-24 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                {p.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats / Achievements Section */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm bg-gray-50"
            >
              <div className="text-4xl">{s.icon}</div>
              <div className="text-3xl font-bold mt-2">{s.value}+</div>
              <div className="mt-1 text-gray-700">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials / Happy Customers */}
      <div className="mt-16 px-6 md:px-12">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          What Our Clients Say
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 italic">“{t.text}”</p>
              <div className="mt-6 text-right font-semibold text-gray-800">
                — {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-24 text-center">
        <a
          href="/contact"
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-500 text-white font-semibold rounded-full hover:opacity-90 transition"
        >
          Contact Us for a Consultation
        </a>
      </div>
    </div>
  );
};

export default Project;
