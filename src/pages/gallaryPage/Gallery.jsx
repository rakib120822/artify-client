import React, { useEffect, useState } from "react";
import GalleryCard from "../../components/GalleryCard";
import useAuth from "../../hooks/useAuth";

function Gallery() {
  const { user } = useAuth();
  const [myArtWorks, setMyArtWorks] = useState([]);
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
        setMyArtWorks(data.data);
        setLoading(false);
      });
  }, [user]);

  return (
    <section className=" p-6 bg-base-200 min-h-screen">
      <title>My Gallery</title>
      <h1 className="text-4xl font-extrabold text-center mb-10">
        My <span className="text-red-800">Gallery</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
        {loading ? (
          <>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </>
        ) : (
          myArtWorks?.map((artwork) => (
            <GalleryCard
              key={artwork._id}
              artwork={artwork}
              setMyArtWorks={setMyArtWorks}
              myArtWorks={myArtWorks}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Gallery;
