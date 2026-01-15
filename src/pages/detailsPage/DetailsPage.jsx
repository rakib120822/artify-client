import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { FaHeart, FaUserFriends } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmarkRemove } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

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
    if (!user) {
      toast.error("You need to login first to like the artwork");
      navigate("/auth/login");
      return;
    }

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
    if (!user) {
      toast.error("You need to login first to like the artwork");
      navigate("/auth/login");
      return;
    }
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
    if (!user) {
      toast.error("You need to login first to like the artwork");
      navigate("/auth/login");
      return;
    }
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
    fetch(`https://artify-server-xi.vercel.app/artwork/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.like);
        setArtWork(data);
        setLoading(false);
      });
  }, [id, user, setIsliked, setIsFavorite]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl text-red-800"></span>
      </div>
    );
  }

  console.log("this from details page : ", likes);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Artwork Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={artWork?.image}
            alt={artWork?.title}
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* Artwork Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{artWork?.title}</h1>

          {/* Artist Info */}
          <div className="flex items-center gap-4">
            <img
              src={artWork?.artist_image}
              alt={artWork?.artist_name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-lg">{artWork?.artist_name}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaUserFriends />
                <span>{artWork?.followers} followers</span>
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {artWork?.category}
            </p>
            <p>
              <span className="font-semibold">Medium:</span> {artWork?.medium}
            </p>
            <p>
              <span className="font-semibold">Created:</span>{" "}
              {new Date(artWork?.created_at).toDateString()}
            </p>
            <p>
              <span className="font-semibold">Visibility:</span>{" "}
              {artWork?.visibility}
            </p>
          </div>

          {/* Likes & Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-red-500">
              <FaHeart />
              <span className="font-semibold">{likes} Likes</span>
            </div>
            <p className="text-3xl font-bold text-primary">${artWork?.price}</p>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {artWork?.description}
          </p>
          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => handleLiked()}
              className="flex items-center gap-2"
            >
              {isLiked ? (
                <FaHeart color="red" size={30} />
              ) : (
                <FaRegHeart size={30} />
              )}
            </button>
            {isFavorite ? (
              <button onClick={handleFavoriteRemove}>
                <CiBookmarkRemove size={30} />
              </button>
            ) : (
              <button onClick={handleFavorite}>
                <CiBookmark size={30} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsPage;
