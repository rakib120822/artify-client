import { useState } from "react";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

const ApprovedArtwork = () => {
  const [approvedArtworks, setApprovedArtworks] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://artify-server-xi.vercel.app/approved-artworks?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setApprovedArtworks(data);
        setLoading(false);
      });
  }, [user]);
  return (
    <div className="p-6 bg-base-200 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <FaCheckCircle className="text-success" />
          Approved <span className="text-red-800">ArtWork</span>
        </h1>
        <p className="text-base-content/70">
          List of artworks that have been reviewed and approved by admin.
        </p>
      </div>

      {/* Artwork Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          <>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </>
        ) : (
          approvedArtworks.map((art) => (
            <div key={art.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={art.image}
                  alt={art.title}
                  className="h-52 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{art.title}</h2>
                <p className="text-sm text-base-content/70">
                  Artist: {art.artist}
                </p>
                <p className="text-sm text-base-content/70">
                  Approved on: {art.approvedDate}
                </p>

                <div className="card-actions justify-end">
                  <span className="badge badge-success gap-2">
                    <FaCheckCircle />
                    Approved
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApprovedArtwork;
