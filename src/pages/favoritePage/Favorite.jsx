import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import useAuth from "../../hooks/useAuth";

function Favorite() {
  const [favorites, setFavorites] = useState();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://artify-server-xi.vercel.app/favorite-artworks?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
        setLoading(false);
      });
  }, [user, setFavorites]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl text-red-800"></span>
      </div>
    );
  }

  return (
    <section className="w-11/12 mx-auto my-10">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        My <span className="text-red-800">Favorite</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {favorites?.map((favorite) => (
          <Card key={favorite._id} artwork={favorite} />
        ))}
      </div>
    </section>
  );
}

export default Favorite;
