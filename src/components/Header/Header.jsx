import { TbDeviceGamepad3Filled } from "react-icons/tb";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <TbDeviceGamepad3Filled className="icon" />
            <p>Gamepad</p>
          </div>
        </Link>
        <div className="header-buttons">
          <button>My Collection</button>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
