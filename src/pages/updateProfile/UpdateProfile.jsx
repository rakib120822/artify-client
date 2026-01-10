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
        fetch(`https://artify-server-xi.vercel.app/user?email=${user?.email}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user?.accessToken}`,
          },
          body: JSON.stringify({ displayName: name, photoURL: photoURL }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId || data.modifiedCount > 0) {
              toast.success("update successful! ");
              setLoading(false);
            }
          });
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center  ">
      <title>Update - Profile</title>
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaUserEdit className="text-primary" />
            Update Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="flex flex-col items-center gap-3">
              <div className="avatar">
                <div className="max-w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
                name="name"
              />
            </div>
            {/* Profile Image */}
            <div>
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                defaultValue={user?.photoURL}
                name="photoURL"
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
