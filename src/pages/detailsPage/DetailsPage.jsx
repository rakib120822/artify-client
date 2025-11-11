import React from "react";

function DetailsPage() {
  return (
    <div className="w-11/12 mx-auto my-[50px]">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">title</h2>
          <p>artist name</p>
          <p>description</p>
          <div className="badge badge-outline text-[#991B1B]">Error</div>

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
          <h2 className="card-title">name</h2>
          <p>total artwork : 44</p>
        </div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
      </div>
    </div>
  );
}

export default DetailsPage;
