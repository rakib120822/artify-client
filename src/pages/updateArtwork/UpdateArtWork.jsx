import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

function UpdateArtWork() {
  const { id } = useParams();
  const { user } = useAuth();
  const [artWork, setArtWork] = useState();
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
      await fetch(`http://localhost:3000/artwork/${artWork?._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newArtWork),
      });

      toast.success("Update Successful!");
      navigate("/my-gallery");
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/artwork/${id}`)
      .then((res) => res.json())
      .then((data) => setArtWork(data));
  }, [id]);

  return (
    <div>
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
                />
                <label className="label">User Email</label>
                <input
                  type="email"
                  required
                  className="input w-full"
                  placeholder="email"
                  value={user?.email}
                />
                <label className="label">Title</label>
                <input
                  type="text"
                  required
                  className="input w-full"
                  placeholder="title"
                  name="title"
                  defaultValue={artWork?.title}
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  required
                  className="input w-full"
                  placeholder="photo URL"
                  name="photoURL"
                  defaultValue={artWork?.image}
                />
                <label className="label">Description</label>
                <textarea
                  required
                  className="textarea h-24 w-full"
                  placeholder="description"
                  name="description"
                  defaultValue={artWork?.description}
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
                      defaultValue={artWork?.category}
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
                      defaultValue={artWork?.medium}
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
                  defaultValue={artWork?.visibility}
                />
                <label className="label">Price</label>
                <input
                  required
                  type="number"
                  className="input w-full"
                  placeholder="Price"
                  name="price"
                  defaultValue={artWork?.price}
                />
                <button className="btn bg-red-800 text-white mt-4">
                  update
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateArtWork;
