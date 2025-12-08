import { TbDeviceGamepad3Filled } from "react-icons/tb";

import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <TbDeviceGamepad3Filled className="icon" />
          <p>Gamepad</p>
        </div>
        <div className="header-buttons">
          <button>My Collection</button>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
