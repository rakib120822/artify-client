import React, { useEffect, useState } from "react";
import GalleryCard from "../../components/GalleryCard";
import useAuth from "../../hooks/useAuth";

function Gallery() {
  const { user } = useAuth();
  const [myArtWorks, setMyArtWorks] = useState();

  useEffect( () => {
   fetch(`http://localhost:3000/my-artworks?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyArtWorks(data));
  }, [user]);

  return (
    <section className="w-11/12 mx-auto my-10">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        My <span className="text-red-800">Gallery</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {myArtWorks?.map((artwork) => (
          <GalleryCard key={artwork._id} artwork={artwork} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
