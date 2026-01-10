import { FaLock } from "react-icons/fa";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-5 rounded-full bg-error/10 text-error text-4xl">
            <FaLock />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-error">403</h1>
        <h2 className="text-2xl font-semibold mt-4">Access Forbidden</h2>

        <p className="text-base-content/70 mt-3">
          Sorry, you don’t have permission to access this page. Please contact
          the administrator or return to a safe page.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link to="/dashboard" className="btn btn-outline">
            Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Forbidden;
