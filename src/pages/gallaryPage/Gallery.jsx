import React, { useEffect, useState } from "react";
import GalleryCard from "../../components/GalleryCard";
import useAuth from "../../hooks/useAuth";

function Gallery() {
  const { user } = useAuth();
  const [myArtWorks, setMyArtWorks] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://artify-server-xi.vercel.app/my-artworks?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyArtWorks(data);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl text-red-800"></span>
      </div>
    );
  }
  return (
    <section className="w-11/12 mx-auto">
      <title>My Gallery</title>
      <h1 className="text-4xl font-extrabold text-center my-10">
        My <span className="text-red-800">Gallery</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
        {myArtWorks?.map((artwork) => (
          <GalleryCard
            key={artwork._id}
            artwork={artwork}
            setMyArtWorks={setMyArtWorks}
            myArtWorks={myArtWorks}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
