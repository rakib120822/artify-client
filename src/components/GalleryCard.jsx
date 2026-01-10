import React from "react";
import { useNavigate } from "react-router";

import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

function GalleryCard({ artwork, setMyArtWorks, myArtWorks }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(
          `https://artify-server-xi.vercel.app/artwork/${artwork?._id}?email=${artwork?.artist_email}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${user?.accessToken}`,
            },
          }
        );
        setMyArtWorks(
          myArtWorks.filter((myArtWork) => myArtWork._id != artwork._id)
        );
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="card bg-base-100  border border-[#991B1B] ">
      <figure className="h-40 w-full overflow-hidden">
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
        <div
          className={`badge badge-outline ${
            artwork?.adminApproval === "approved"
              ? "badge-success"
              : artwork?.adminApproval === "pending"
              ? "badge-warning"
              : "badge-error"
          }`}
        >
          {artwork?.adminApproval}
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/update/${artwork?._id}`)}
            className="btn btn-outline hover:btn-primary hover:text-white text-primary  font-bold"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-primary hover:bg-white hover:text-primary  font-bold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
