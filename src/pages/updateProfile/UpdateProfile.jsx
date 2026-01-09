import React from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";

function UpdateProfile() {
  const { user, setUser, updateInfo, setLoading } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    setLoading(true);
    updateInfo(name, photoURL)
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success("update successful! ");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="w-11/12 mx-auto my-2">
      <title>Update - Profile</title>
      {/* <div className="hero  w-full">
        <div className="hero-content w-full  gap-10 flex-col lg:flex-row">
          <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
          <form onSubmit={handleSubmit} className="w-1/3">
            <fieldset className="fieldset">
              <label className="floating-label">
                <span>Name</span>
                <input
                  type="text"
                  className="input my-1 w-full"
                  placeholder="Email"
                  required
                  name="name"
                  defaultValue={user.displayName}
                />
              </label>
              <label className="floating-label">
                <span>Photo URL</span>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="photo url"
                  required
                  name="photoURL"
                  defaultValue={user.photoURL}
                />
              </label>

              <button
                type="submit"
                className="btn  bg-red-800 text-white hover:text-red-800 hover:bg-white border border-red-800  font-bold "
              >
                update
              </button>
            </fieldset>
          </form>
        </div>
      </div> */}

      <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FaUserEdit className="text-primary" />
              Update Profile
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="flex flex-col items-center gap-3">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt="Profile" />
                  </div>
                </div>
              </div>
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  defaultValue={user?.displayName}
                />
              </div>
              {/* Profile Image */}
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered file-input-sm w-full"
              />

              {/* Button */}
              <button className="btn btn-primary w-full">Update Profile</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
