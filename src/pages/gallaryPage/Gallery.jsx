import React from "react";
import GalleryCard from "../../components/GalleryCard";


function Gallery() {
  return (
    <section className="w-11/12 mx-auto my-10">
    
        <h1 className="text-4xl font-extrabold text-center mb-10">
          My  <span className="text-red-800">Gallery</span>
        </h1>
       
  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        
       <GalleryCard/>
       <GalleryCard/>
       <GalleryCard/>
       <GalleryCard/>
      </div>
    </section>
  );
}

export default Gallery;
