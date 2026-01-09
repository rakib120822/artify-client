import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <section className="flex pt-10 ">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full">
        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left h-96   space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-primary">ART</span>IFY -{" "}
            <span className="">
              An <br /> ArtWork <span className="text-primary">Gallery</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-base-content/70">
            Explore the world of creativity and imagination
            <br /> through our{" "}
            <span className="font-semibold">
              <Typewriter
                words={[
                  "unique collections.",
                  "amazing artists.",
                  "stunning visuals.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </p>

          <div className="space-x-4 mt-4">
            <Link to={"/all-artworks"} className="btn btn-primary">
              Explore Artworks
            </Link>
            <Link
              to={"/dashboard/add-artwork"}
              className="btn btn-outline btn-primary"
            >
              Upload Your Art
            </Link>
          </div>
        </div>

        {/* Right: Slider */}
        <div className="flex-1 lg:w-1/2 h-96 w-full ">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
