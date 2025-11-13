import React, {  useEffect, useState } from "react";
import Card from "../../components/Card";
import useAuth from "../../hooks/useAuth";


function Favorite() {
  const [ favorites, setFavorites ] = useState();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/favorite-artworks?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
      });
  }, [user, setFavorites]);

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
