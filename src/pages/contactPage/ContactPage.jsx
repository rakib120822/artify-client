import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-5 py-10">
      <div className="w-full grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h1 className="text-4xl font-extrabold mb-5 md:mb-0">
            <span className="text-red-800">Get in </span>Touch
          </h1>
          <p className="text-base-content/70 mb-6">
            Have questions or want to work together? Feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-red-800 text-xl" />
              <span>+880 18838605</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-800 text-xl" />
              <span>payelrakibulislam@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-800 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h1 className="text-4xl font-extrabold mb-5 md:mb-0">
            <span className="text-red-800">Contact </span>Form
          </h1>

          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button className="btn bg-red-800 text-white w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
