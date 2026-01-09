import React from "react";
import { Link } from "react-router";

const CtaSection = () => {
  return (
    <div>
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Your Artistic Journey Today
          </h2>
          <p className="mb-6 text-lg md:text-xl">
            Explore artworks, connect with artists, and showcase your own
            creations!
          </p>
          <Link
            to={"/all-artworks"}
            className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CtaSection;
