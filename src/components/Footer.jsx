import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const handleSocial = (url) => {
    window.open(url, "_blank");
  };
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to={"/about"} className="link link-hover">
          About us
        </Link>
        <Link to={"/contact"} className="link link-hover">
          Contact
        </Link>
        <Link to={"/contact"} className="link link-hover">
          Help Center
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <button
            onClick={() =>
              handleSocial("https://www.linkedin.com/in/rakibul-islam-payel/")
            }
            className="flex items-center"
          >
            <span className="flex items-center">
              <FaLinkedin size={22} />
            </span>
          </button>
          <button onClick={() => handleSocial("https://wa.me/8801883860565")}>
            <FaWhatsappSquare size={22} />
          </button>
          <button
            onClick={() =>
              handleSocial("https://www.facebook.com/rakibul.islam.466934")
            }
          >
            <FaFacebookSquare size={22} />
          </button>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Artify
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
