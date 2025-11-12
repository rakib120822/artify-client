import React from "react";
import { useNavigate } from "react-router";

function GalleryCard({ artwork }) {
  const navigate = useNavigate();
  
  return (
    <div className="card bg-base-100 shadow-md  border border-[#991B1B] hover:scale-106 transition delay-300 ease-in-out">
      <figure className="h-[300px]">
        <img src={artwork?.image} alt="Shoes" className="w-full h-full" />
      </figure>
      <div className="card-body">
        <h2
          onClick={() => navigate(`/details/${artwork?._id}`)}
          className="card-title hover:underline"
        >
          {artwork?.title}
        </h2>
        <p>Artist : {artwork?.artist_name}</p>
        <div className="badge badge-outline text-[#991B1B]">
          {artwork?.category}
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/update/${artwork?._id}`)}
            className="btn btn-outline hover:bg-red-800 hover:text-white text-red-800  font-bold"
          >
            Update
          </button>
          <button onClick={handleDelete} className="btn btn-outline bg-red-800 text-white hover:text-red-800 hover:bg-white border border-red-800  font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
