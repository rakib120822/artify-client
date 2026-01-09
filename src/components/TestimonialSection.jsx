import React from "react";
const testimonials = [
  {
    name: "Payel Hossain",
    feedback: "I found incredible artworks and inspiration here.",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Sara Ahmed",
    feedback: "Artify gave me a platform to showcase my art to the world!",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Rakibul Islam",
    feedback: "Amazing community and support for emerging artists.",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "John Doe",
    feedback: "A fantastic place to discover and share creative artworks.",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

const TestimonialSection = () => {
  return (
    <div>
      {/* Testimonials Section */}
      <section className="py-16">
        <div className=" text-center">
          <h2 className="text-4xl font-bold mb-10">
            Testim<span className="text-primary">onials</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="bg-base-100 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
              >
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <p className="text-base-content/70 italic mb-2">
                  "{testi.feedback}"
                </p>
                <h4 className="font-semibold">{testi.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
