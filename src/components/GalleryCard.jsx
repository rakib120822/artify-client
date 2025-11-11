import React from "react";
import { useNavigate } from "react-router";

function GalleryCard() {
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 shadow-md  border border-[#991B1B] hover:scale-106 transition delay-300 ease-in-out">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>rakibul islam</p>
        <div className="badge badge-outline text-[#991B1B]">Error</div>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate("/details/1")}
            className="btn btn-outline hover:bg-red-800 hover:text-white text-red-800  font-bold"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/details/1")}
            className="btn btn-outline bg-red-800 text-white hover:text-red-800 hover:bg-white border border-red-800  font-bold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
