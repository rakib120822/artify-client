import React from "react";
import { useNavigate } from "react-router";

function Card({ artwork }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="card bg-base-100 shadow-md  border border-[#991B1B] hover:scale-106 transition delay-300 ease-in-out">
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
      </div>
    </>
  );
}

export default Card;
