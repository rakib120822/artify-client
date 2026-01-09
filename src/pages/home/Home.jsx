import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "../../components/Card";
import LogoCard from "../../components/LogoCard";
import Marquee from "react-fast-marquee";

import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import HeroSection from "../../components/HeroSection";
import ArtistSlider from "../../components/ArtistSlider";

import BlogsSection from "../../components/blogsSection";
import ServiceSection from "../../components/ServiceSection";
import FaqSection from "../../components/FaqSection";
import CtaSection from "../../components/CtaSection";

import TestimonialSection from "../../components/TestimonialSection";

function Home() {
  const [latestArtworks, setLatestArtworks] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://artify-server-xi.vercel.app/artworks/latest")
      .then((res) => res.json())
      .then((data) => {
        setLatestArtworks(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl text-red-800"></span>
      </div>
    );
  }

  return (
    <div className="px-10">
      <title>Home</title>
      <HeroSection />
      <main className="my-[50px] ">
        {/* card_section */}
        <section>
          <h1 className="text-center text-4xl font-bold mb-[50px]">
            Latest <span className="text-red-800">Artworks</span>
          </h1>
          <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {latestArtworks?.map((artwork) => (
              <Card key={artwork._id} artwork={artwork} />
            ))}
          </section>
        </section>

        {/* Blogs Section */}
        <BlogsSection />
        {/* Services Sections */}
        <ServiceSection />

        {/* testimonial Section */}
        <TestimonialSection />
        {/* top_artist_section */}
        <section className="my-20  ">
          <h1 className="text-center text-4xl font-extrabold mb-[50px]">
            Top <span className="text-red-800">Artists </span>
          </h1>
          <ArtistSlider />
        </section>

        {/* show_case */}
        <section className="my-4">
          <Marquee autoFill={true} pauseOnHover={true}>
            <LogoCard imgUrl={image1} />
            <LogoCard imgUrl={image2} />

            <LogoCard imgUrl={image3} />

            <LogoCard imgUrl={image4} />
            <LogoCard imgUrl={image5} />
          </Marquee>
        </section>

        {/* FAQ Section */}
        <FaqSection />
        {/* {CTA Section} */}
        <CtaSection />
      </main>
    </div>
  );
}

export default Home;
