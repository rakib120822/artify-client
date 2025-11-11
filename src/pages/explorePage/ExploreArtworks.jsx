import React from "react";
import Card from "../../components/Card";

function ExploreArtworks() {
  return (
    <section className="w-11/12 mx-auto my-40">
      <div className="flex justify-between items-center mb-20">
        <h1 className="text-4xl font-extrabold ">
          All <span className="text-red-800">ArtWorks</span>
        </h1>
        <div className="join">
          <input className="input join-item" type="text" placeholder="search" />
          <button className="btn join-item  bg-red-800 text-white font-bold">Subscribe</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  );
}

export default ExploreArtworks;
