import React from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

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
        setLoading(false)
      });
  };
  return (
    <div className="w-11/12 mx-auto my-2">
      <div className="hero  w-full">
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
      </div>
    </div>
  );
}

export default UpdateProfile;
