import React, { useEffect, useState } from "react";

import ExploreCard from "../../components/ExploreCard";

function ExploreArtworks() {
  const [artWorks, setArtWorks] = useState();
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 15;
  const handleSearch = async (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    await fetch(
      `https://artify-server-xi.vercel.app/artworks/search?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setArtWorks(data));
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://artify-server-xi.vercel.app/artworks?limit=${limit}&page=${
        currentPage * limit
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setArtWorks(data.data);
        const totalPages = Math.ceil(data.totalArtworks / limit);
        setTotalPage(totalPages);
      });
  }, [currentPage]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl text-red-800"></span>
      </div>
    );
  }

  return (
    <section className="px-10 my-10">
      <title>Explore ArtWorks</title>
      <div className="flex flex-col md:flex-row justify-between items-center mb-20">
        <h1 className="text-4xl font-extrabold mb-5 md:mb-0">
          All <span className="text-red-800">ArtWorks</span>
        </h1>
        <form onSubmit={handleSearch}>
          <div className="join">
            <input
              className="input join-item"
              type="text"
              placeholder="search"
              name="search"
            />
            <button className="btn join-item  bg-red-800 text-white font-bold">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
        {artWorks?.map((artwork) => (
          <ExploreCard key={artwork._id} artwork={artwork} />
        ))}
      </div>
      <div className="my-5 flex justify-center items-center  flex-wrap gap-3">
        {Array.from({ length: totalPage }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`btn mx-1 ${currentPage === i ? "btn-primary" : ""}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ExploreArtworks;
