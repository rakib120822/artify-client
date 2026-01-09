import { FaCheck, FaTimes } from "react-icons/fa";

const artworks = [
  {
    id: 1,
    title: "Sunset Dreams",
    artist: "John Doe",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    status: "pending",
  },
  {
    id: 2,
    title: "Abstract Waves",
    artist: "Jane Smith",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    status: "pending",
  },
];

const ArtworkApproval = () => {
  const handleApprove = (id) => {
    console.log("Approved artwork id:", id);
    // 🔗 API call -> PATCH /artworks/approve/:id
  };

  const handleReject = (id) => {
    console.log("Rejected artwork id:", id);
    // 🔗 API call -> PATCH /artworks/reject/:id
  };

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
            {artworks.map((art, index) => (
              <tr key={art.id}>
                <td>{index + 1}</td>

                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={art.image} alt={art.title} />
                    </div>
                  </div>
                </td>

                <td>{art.title}</td>
                <td>{art.artist}</td>

                <td>
                  <span className="badge badge-warning">{art.status}</span>
                </td>

                <td className="text-center space-x-2">
                  <button
                    onClick={() => handleApprove(art.id)}
                    className="btn btn-sm btn-success"
                  >
                    <FaCheck />
                  </button>

                  <button
                    onClick={() => handleReject(art.id)}
                    className="btn btn-sm btn-error"
                  >
                    <FaTimes />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArtworkApproval;
