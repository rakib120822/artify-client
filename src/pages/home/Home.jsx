import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div>
      {/* carousel */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://nordicwallart.com/cdn/shop/products/Hca0610fd385a4f4e9a540c904b13d9e0R.jpg"
            className="w-full h-[400px] overflow-hidden"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://www.tallengestore.com/cdn/shop/products/New_York_Skyline_-_I_a01d9df7-0f02-469c-bcac-0fe32ab72035.jpg?v=1569413855"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://wtm-assets-2.imgix.net/uploads/post/image/492/Copy_of_Copy_of_Untitled_Design__1_.jpg?auto=format%2Cenhance&fit=crop&crop=entropy&w=994&h=520&s=f35f8bde50bf6659a98cb45cce8f68f2"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[400px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Cg7D1DLbaEj_b04QzuBPPbtiGvvRjbWpUQ&s"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
