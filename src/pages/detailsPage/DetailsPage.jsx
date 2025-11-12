import React, { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import favoriteContext from "../../context/favorite/FavoriteContext";
function DetailsPage() {
  const artWork = useLoaderData();
  const [isLiked, setIsliked] = useState(false);
  const [likes, setLikes] = useState(artWork?.like);
  
  const { user } = useAuth();
  const navigate = useNavigate();
  const { favorites, setFavorites,isFavorite, setIsFavorite } = use(favoriteContext);

  const handleLiked = async () => {
    try {
      if (!user?.email) return;

      const result = await fetch(
        `http://localhost:3000/artwork/like/${artWork?._id}?email=${user?.email}`,
        { method: "PUT" }
      ).then((res) => res.json());

      // Check if this artwork is in the user's likes
      const check = result.result.likes.some(
        (id) => id.toString() === artWork._id.toString()
      );

      setIsliked(check);
      setLikes(result.artworkObject.like); // update like count
    } catch (error) {
      toast.error("Failed to like artwork:", error);
    }
  };

  const handleFavorite = async () => {
    await fetch(
      `http://localhost:3000/favorite/${artWork?._id}?email=${user?.email}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      }
    ).then((res) => res.json());
    setIsFavorite(!isFavorite);
    toast.success("Added to the favorite list");
    setFavorites([...favorites, { userEmail: user.email, id: artWork?._id }]);
    navigate("/my-favorites");
  };

  const handleFavoriteRemove = async () => {
    const result = await fetch(
      `http://localhost:3000/favorite/${artWork?._id}?email=${user?.email}`,
      {
        method: "DELETE",
      }
    ).then((res) => res.json());
    setIsFavorite(!isFavorite);
    if (result.deletedCount) {
      toast.success("Remove from the favorite list");
      setFavorites(favorites.filter((favorite) => favorite.id != artWork?._id));
      navigate("/my-favorites");
    }
  };

  return (
    <div className="w-11/12 mx-auto my-[50px]">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="max-w-[300px] h-[300px]">
          <img src={artWork?.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{artWork?.title}</h2>
          <p>Artist : {artWork?.artist_name}</p>
          <p>{artWork?.description}</p>
          <div className="badge badge-outline text-[#991B1B]">
            {artWork?.medium}
          </div>

          <div className="card-actions justify-end">
            <button onClick={handleLiked} className="flex items-center gap-2">
              <span className="text-2xl ">{likes}</span>
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

      <div className="card lg:card-side bg-base-100 shadow-sm my-20">
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
