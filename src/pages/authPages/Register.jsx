import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Register() {
  const { register, setUser, updateInfo, setLoading, googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    // Check minimum length
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    // Check uppercase letter
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter (A–Z).";
    }

    // Check lowercase letter
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter (a–z).";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    const verficationPassword = validatePassword(password);
    if (verficationPassword) {
      return toast.error(verficationPassword);
    }

    const userInfo = { displayName, email, photoUrl };
    register(email, password)
      .then((res) => {
        setUser(res.user);
        updateInfo(displayName, photoUrl).then(() => {
          fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  title: "Account Created!",
                  icon: "success",
                  draggable: true,
                });
              }
            });
        });

        setLoading(false);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
        fetch(`http://localhost:3000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(res.user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Account Created!",
                icon: "success",
                draggable: true,
              });
            }
          });
        setLoading(false);
        navigate(location?.state || "/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="hero min-h-screen my-10">
      <title>Register</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="floating-label">
                <span>Name</span>
                <input
                  type="text"
                  className="input my-1"
                  placeholder="Name"
                  name="name"
                  required
                />
              </label>
              <label className="floating-label">
                <span>Photo URL</span>
                <input
                  type="text"
                  className="input my-1"
                  placeholder="PhotoURL"
                  name="photoUrl"
                  required
                />
              </label>
              <label className="floating-label">
                <span>Email</span>
                <input
                  type="email"
                  className="input my-1"
                  placeholder="Email"
                  name="email"
                  required
                />
              </label>
              <label className="floating-label">
                <span>Password</span>
                <input
                  type="text"
                  className="input"
                  placeholder="Password"
                  name="password"
                  required
                />
              </label>
              <div>
                <p className=" text-center">
                  Have an account?{" "}
                  <Link
                    to={"/auth/login"}
                    className="link link-hover text-red-800"
                  >
                    Please Login
                  </Link>
                </p>
              </div>
              <button className="btn  bg-red-800 text-white hover:text-red-800 hover:bg-white border border-red-800  font-bold ">
                Register
              </button>
            </fieldset>
          </form>
          <div className="divider">OR</div>
          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
