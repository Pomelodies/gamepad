import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        Powered by{" "}
        <Link
          className="linkToApi"
          to="https://api.rawg.io/docs/"
          target="_blank"
        >
          Rawg API
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
