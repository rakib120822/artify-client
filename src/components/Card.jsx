import React from "react";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router";

function Card({ artwork }) {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="card bg-base-100 shadow-md  border border-[#991B1B] hover:scale-106 transition delay-300 ease-in-out">
        <figure className="max-h-[300px]">
          <img src={artwork?.image} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{artwork?.title}</h2>
          <p>Artist : {artwork?.artist_name}</p>

          <div className="badge badge-outline text-[#991B1B]">
            {artwork?.category}
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/details/${artwork?._id}`)}
              className="btn btn-outline hover:bg-red-800 hover:text-white text-red-800  font-bold"
            >
              View Details
            </button>
          </div>
        </div>
      </div> */}
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
        {/* Image */}
        <figure className="h-52 overflow-hidden">
          <img
            src={artwork?.image}
            alt={artwork?.title}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-4">
          {/* Title */}
          <h2 className="card-title text-lg font-semibold line-clamp-1">
            {artwork?.title}
          </h2>

          {/* Category */}
          <p className="text-sm text-gray-500">
            Category: <span className="font-medium">{artwork?.category}</span>
          </p>

          {/* Footer */}
          <div className="card-actions justify-between items-center mt-3">
            {/* Like Count */}
            <div className="flex items-center gap-1 text-rose-500">
              <FaHeart />
              <span className="text-sm font-medium">{artwork?.like}</span>
            </div>

            {/* Details Button */}
            <button
              onClick={() => navigate(`/details/${artwork?._id}`)}
              className="btn btn-sm btn-primary"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
