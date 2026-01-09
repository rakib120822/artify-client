import { FaCheckCircle } from "react-icons/fa";

const approvedArtworks = [
  {
    id: 1,
    title: "Sunset Dreams",
    artist: "John Doe",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    approvedDate: "2026-01-02",
  },
  {
    id: 2,
    title: "Abstract Waves",
    artist: "Jane Smith",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    approvedDate: "2026-01-05",
  },
];

const ApprovedArtwork = () => {
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
        {approvedArtworks.map((art) => (
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
        ))}
      </div>
    </div>
  );
};

export default ApprovedArtwork;
