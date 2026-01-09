import React from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function AddArtwork() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const photoURL = e.target.photoURL.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const medium = e.target.medium.value;
    const visibility = e.target.visibility.value;
    const price = e.target.price.value;
    const newArtWork = {
      title,
      image: photoURL,
      artist_name: user?.displayName,
      artist_image: user?.photoURL,
      followers: 0,
      category,
      price,
      artist_email: user?.email,
      like: 0,
      created_at: new Date(),
      visibility,
      description,
      medium,
    };

    try {
      await fetch("https://artify-server-xi.vercel.app/artworks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${user?.accessToken}`,
        },
        body: JSON.stringify(newArtWork),
      });

      toast.success("Added new artwork!");
      navigate("/my-gallery");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <title>Explore ArtWorks</title>
      <h1 className="text-4xl font-extrabold my-5 md:mb-0 text-center ">
        Add <span className="text-red-800">ArtWorks</span>
      </h1>
      <div className="hero  min-h-screen my-2">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl">
          <div className="card-body ">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">User Name</label>
                <input
                  type="text"
                  required
                  className="input w-full"
                  placeholder="name"
                  value={user?.displayName}
                  readOnly
                />
                <label className="label">User Email</label>
                <input
                  type="email"
                  required
                  className="input w-full"
                  placeholder="email"
                  value={user?.email}
                  readOnly
                />
                <label className="label">Title</label>
                <input
                  type="text"
                  required
                  className="input w-full"
                  placeholder="title"
                  name="title"
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  required
                  className="input w-full"
                  placeholder="photo URL"
                  name="photoURL"
                />
                <label className="label">Description</label>
                <textarea
                  required
                  className="textarea h-24 w-full"
                  placeholder="description"
                  name="description"
                ></textarea>
                <div className="flex gap-2">
                  <div>
                    <label className="label">Category</label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Category"
                      required
                      name="category"
                    />
                  </div>
                  <div>
                    <label className="label">Medium</label>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Medium"
                      required
                      name="medium"
                    />
                  </div>
                </div>
                <label className="label">Visibility</label>
                <input
                  required
                  type="text"
                  className="input w-full"
                  placeholder="visibility"
                  name="visibility"
                />
                <label className="label">Price</label>
                <input
                  required
                  type="number"
                  className="input w-full"
                  placeholder="Price"
                  name="price"
                />
                <button className="btn btn-primary  text-secondary mt-4">
                  Add My ArtWork
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddArtwork;
