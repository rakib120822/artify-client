import React from "react";
import { Link } from "react-router";
import Card from "../../components/Card";
import LogoCard from "../../components/LogoCard";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <div>
      {/* carousel */}
      <header className="carousel w-full">
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
      </header>
      <main className="w-11/12  mx-auto my-[50px] ">
        {/* card_section */}
        <section>
          <h1 className="text-center text-4xl font-extrabold mb-[50px]">
            Featured <span className="text-red-800">Artworks</span>
          </h1>
          <section className="grid grid-cols-3 gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </section>

        {/* top_artist_section */}
        <section className="my-20">
          <h1 className="text-center text-4xl font-extrabold mb-[50px]">
            Top <span className="text-red-800">Artists </span>
          </h1>
          <div className="carousel carousel-end rounded-box">
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASHxtKawgAwcM8sO5UrX6xdGjR-y8E37DaQ&s"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3fQgrgGGmP7O7uSpiJMzpSBSFEde8YbIOQ&shttps://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXanP-cy_YQtZkvHr5PakB8VRw8SJh749wg&s"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZhmipj9s_EPcproaCeI-JtICeYYHnyKJdQ&s"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdza3y0U63C-WhZEhyWc7ucDt1XzJaAc_ihw&s"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="data:image/jpeg;base64,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"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoE_zCH5i4i5oFk8VYmMe0OrN-TaZrQtsK_g&s"
                alt="Drink"
              />
            </div>
          </div>
        </section>

        {/* show_case */}
        <section className="my-4">
          <Marquee autoFill={true} pauseOnHover={true}>
            <LogoCard
              imgUrl={
                "https://img.freepik.com/free-vector/colorful-leaves-logo-template_1071-61.jpg"
              }
            />
            <LogoCard
              imgUrl={
                "data:image/png;base64,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"
              }
            />

            <LogoCard
              imgUrl={
                "https://t4.ftcdn.net/jpg/04/73/07/99/360_F_473079907_94eRabVj7S9nlRUYX4kYmBUQ6Brtftm3.jpg"
              }
            />

            <LogoCard
              imgUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvizx3NSfOP5swrNYiydhv04xqivOx_lFbWJ6iEjK04GSr8MM0TOREKRc&s"
              }
            />
            <LogoCard
              imgUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2EZuVJ2PLf-rmBKtGq9kL2YliB846555qA&s"
              }
            />
          </Marquee>
        </section>

        <section className="my-5"></section>
      </main>
    </div>
  );
}

export default Home;
