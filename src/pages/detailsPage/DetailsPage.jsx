import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

function DetailsPage() {
  const [artWork, setArtWork] = useState();
  const [isLiked, setIsliked] = useState();
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [likes, setLikes] = useState(artWork?.like);
  const [isFavorite, setIsFavorite] = useState();

  const handleLiked = async () => {
    const result = await fetch(
      `https://artify-server-xi.vercel.app/artwork/like/${id}?email=${user?.email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    ).then((res) => res.json());

    if (result.message === "Liked") {
      setLikes(likes + 1);
      toast.success("Liked");
      setIsliked(true);
    } else {
      setLikes(likes - 1);
      setIsliked(false);
      toast.error("Unliked");
    }
  };

  const handleFavorite = async () => {
    const result = await fetch(
      `https://artify-server-xi.vercel.app/favorite/${artWork?._id}?email=${user?.email}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    ).then((res) => res.json());
    if (result.insertedId) {
      toast.success("Added to the favorite List");
      setIsFavorite(true);
      navigate("/my-favorites");
    }
  };

  const handleFavoriteRemove = async () => {
    const result = await fetch(
      `https://artify-server-xi.vercel.app/favorite/${artWork?._id}?email=${user?.email}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    ).then((res) => res.json());

    if (result.deletedCount) {
      setIsFavorite(false);
      toast.success("Removed From Favorite List");
      navigate("/my-favorites");
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://artify-server-xi.vercel.app/artwork/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.like);
        setArtWork(data);
        setLoading(false);
      });
  }, [id, user]);

  useEffect(() => {
    fetch(`https://artify-server-xi.vercel.app/user/likes?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsliked(data[0].likes.includes(id));
      });
  }, [id, user]);

  useEffect(() => {
    fetch(
      `https://artify-server-xi.vercel.app/user/favorite-artworks?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setIsFavorite(data.some((fav) => fav.id == id));
      });
  }, [user, id]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl text-red-800"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto my-[50px]">
      <title>Details - Page</title>
      <div className="card lg:card-side bg-base-100 shadow-sm border border-red-800">
        <figure className="max-w-[300px] h-[300px]">
          <img src={artWork?.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{artWork?.title}</h2>
          <p>Artist : {artWork?.artist_name}</p>
          <p>{artWork?.description}</p>
          <p>Price : {artWork?.price}$</p>
          <div className="badge badge-outline text-[#991B1B]">
            {artWork?.medium}
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleLiked()}
              className="flex items-center gap-2"
            >
              <span className="text-2xl">{likes}</span>
              {isLiked ? (
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios-filled/50/FA5252/filled-like.png"
                  alt="filled-like"
                />
              ) : (
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios/50/like--v1.png"
                  alt="like--v1"
                />
              )}
            </button>
            {isFavorite ? (
              <button onClick={handleFavoriteRemove}>
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios/50/1A1A1A/delete-forever--v1.png"
                  alt="delete-forever--v1"
                />
              </button>
            ) : (
              <button onClick={handleFavorite}>
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios/50/bookmark-ribbon--v1.png"
                  alt="bookmark-ribbon--v1"
                />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-sm my-20 border border-red-800">
        <div className="card-body">
          <h2 className="card-title">{artWork?.artist_name}</h2>
          <p>Followers : {artWork?.followers}</p>
        </div>
        <figure className="max-w-[300px] h-[300px]">
          <img src={artWork?.artist_image} alt="Album" />
        </figure>
      </div>
    </div>
  );
}

export default DetailsPage;
