import "./home.css";
import { TbDeviceGamepad3Filled } from "react-icons/tb";

import "./home.css";

const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="logo">
          <TbDeviceGamepad3Filled className="icon" />
          <h1>Gamepad</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="Search for a game..." />
          <p>Search xx games</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
