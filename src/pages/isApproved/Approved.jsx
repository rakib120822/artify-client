import { useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const ArtworkApproval = () => {
  const { user } = useAuth();
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleApprove = (id) => {
    // 🔗 API call -> PATCH /artworks/approve/:id
    fetch(
      `https://artify-server-xi.vercel.app/approve/${id}?status=approved&email=${user?.email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // Optionally, refresh the artwork list or update state here
        if (data.acknowledged) {
          setArtworks(artworks.filter((art) => art._id !== id));
          Swal.fire({
            title: "Approved!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  const handleReject = (id) => {
    // 🔗 API call -> PATCH /artworks/reject/:id
    fetch(
      `https://artify-server-xi.vercel.app/artworks/approve/${id}?status=rejected&email=${user?.email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setArtworks(artworks.filter((art) => art._id !== id));
          Swal.fire({
            title: "Rejected!",
            icon: "success",
            draggable: true,
          });
        }
        // Optionally, refresh the artwork list or update state here
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://artify-server-xi.vercel.app/pending-artworks?email=${user?.email}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data);
        setLoading(false);
      });
  }, [user, artworks]);

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">
        Manage <span className="text-red-800">ArtWork</span>
      </h1>
      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table table-zebra">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Preview</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {loading ? (
              <>
                <div className="flex w-52 flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                      <div className="skeleton h-4 w-20"></div>
                      <div className="skeleton h-4 w-28"></div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              artworks?.map((art, index) => (
                <tr key={art._id}>
                  <td>{index + 1}</td>

                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded">
                        <img src={art.image} alt={art.title} />
                      </div>
                    </div>
                  </td>

                  <td>{art.title}</td>
                  <td>{art.artist_name}</td>

                  <td>
                    <span className="badge badge-warning">
                      {art.adminApproval}
                    </span>
                  </td>

                  <td className="text-center space-x-2">
                    <button
                      onClick={() => handleApprove(art._id)}
                      className="btn btn-sm btn-success"
                    >
                      <FaCheck />
                    </button>

                    <button
                      onClick={() => handleReject(art._id)}
                      className="btn btn-sm btn-error"
                    >
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArtworkApproval;
