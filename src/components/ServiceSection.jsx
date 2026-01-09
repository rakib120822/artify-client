import React from "react";
import { FaPaintBrush, FaPalette, FaUsers } from "react-icons/fa";
const services = [
  {
    icon: <FaPaintBrush size={28} />,
    title: "Artwork Creation",
    desc: "Create and showcase your unique art pieces.",
  },
  {
    icon: <FaPalette size={28} />,
    title: "Exhibition",
    desc: "Show your art to global audiences.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Community",
    desc: "Join a network of passionate artists.",
  },
];
const ServiceSection = () => {
  return (
    <section className="py-16">
      {/* Services Section */}
      <div className="text-center">
        <h2 className="text-4xl text-center font-bold mb-10">
          Our <span className="text-primary">Services</span>
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-base-100 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-base-content/70">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
