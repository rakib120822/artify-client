import React from "react";
import { useLoaderData } from "react-router";

function DetailsPage() {
  const artWork = useLoaderData();
  console.log(artWork);
  return (
    <div className="w-11/12 mx-auto my-[50px]">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="max-w-[300px] h-[300px]">
          <img src={artWork?.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{artWork?.title}</h2>
          <p>Artist : {artWork?.artist_name}</p>
          <p>{artWork?.description}</p>
          <div className="badge badge-outline text-[#991B1B]">
            {artWork?.medium}
          </div>

          <div className="card-actions justify-end">
            <button>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios/50/like--v1.png"
                alt="like--v1"
              />
            </button>
            <button>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios/50/bookmark-ribbon--v1.png"
                alt="bookmark-ribbon--v1"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-sm my-20">
        <div className="card-body">
          <h2 className="card-title">{artWork?.artist_name}</h2>
          <p>Followers : {artWork?.followers}</p>
        </div>
        <figure className="max-w-[300px] h-[300px]">
          <img src={artWork?.artist_image} alt="Album" />
        </figure>
      </div>
    </div>
  );
}

export default DetailsPage;
