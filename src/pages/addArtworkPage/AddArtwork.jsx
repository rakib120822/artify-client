import React from "react";

function AddArtwork() {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl">
          <div className="card-body ">
            <fieldset className="fieldset">
              <label className="label">Title</label>
              <input
                type="text"
                required
                className="input w-full"
                placeholder="title"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                required
                className="input w-full"
                placeholder="photo URL"
              />
              <label className="label">Description</label>
              <textarea
                required
                className="textarea h-24 w-full"
                placeholder="description"
              ></textarea>
              <div className="flex gap-2">
                <div>
                  <label className="label">Category</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Category"
                    required
                  />
                </div>
                <div>
                  <label className="label">Medium</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="photo URL"
                    required
                  />
                </div>
              </div>
              <label className="label">Price</label>
              <input
                required
                type="number"
                className="input w-full"
                placeholder="Price"
              />
              <button className="btn bg-red-800 text-white mt-4">
                Add My ArtWork
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddArtwork;
