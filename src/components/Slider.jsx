import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper/modules";

const sliderImages = [
  "https://nordicwallart.com/cdn/shop/products/Hca0610fd385a4f4e9a540c904b13d9e0R.jpg",
  "https://www.tallengestore.com/cdn/shop/products/New_York_Skyline_-_I_a01d9df7-0f02-469c-bcac-0fe32ab72035.jpg?v=1569413855",
  "https://wtm-assets-2.imgix.net/uploads/post/image/492/Copy_of_Copy_of_Untitled_Design__1_.jpg?auto=format%2Cenhance&fit=crop&crop=entropy&w=994&h=520&s=f35f8bde50bf6659a98cb45cce8f68f2",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Cg7D1DLbaEj_b04QzuBPPbtiGvvRjbWpUQ&s",
];
const Slider = () => {
  return (
    <div className=" h-96 w-full">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="h-80 w-full"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
