import React from "react";

const teamMembers = [
  {
    name: "Rakibul Islam",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Payel Hossain",
    role: "Lead Designer",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sara Ahmed",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-base-200 min-h-screen px-10">
      {/* Hero Section */}
      <section className="bg-base-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">About</span> Us
          </h1>
          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Welcome to <span className="text-primary">Artify</span>! We are
            dedicated to showcasing creativity and connecting artists with art
            lovers around the world. Our mission is to make art accessible,
            enjoyable, and inspiring for everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto grid gap-10 md:grid-cols-2">
          <div className="bg-base-100 shadow rounded-lg p-8">
            <h2 className="text-2xl  font-semibold mb-4">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-base-content/70">
              Our mission is to provide a platform where artists can share their
              work with the world, and art lovers can discover, enjoy, and
              support amazing creations.
            </p>
          </div>
          <div className="bg-base-100 shadow rounded-lg p-8">
            <h2 className="text-2xl  font-semibold mb-4">
              Our <span className="text-primary">Vision</span>
            </h2>
            <p className="text-base-content/70">
              We envision a world where creativity thrives, artists are
              empowered, and every piece of art finds its audience. We aim to be
              the bridge connecting art with people everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">
            Meet Our Team
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-base-200 shadow-lg rounded-xl p-6 flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-base-content/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 mb-5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-base-content/70 mb-6">
            Start exploring amazing artworks or upload your own creation today!
          </p>
          <button className="btn btn-primary btn-lg">Explore Artworks</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
