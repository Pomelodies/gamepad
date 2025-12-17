import "./login.css";
import { CgProfile } from "react-icons/cg";
import { TbPlaylistAdd } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <div className="container">
        <div className="login">
          <section className="info-login">
            <h2>How it works?</h2>
            <div>
              <CgProfile className="icon" />
              <p>
                Log in to your free account to be able to get all features of
                Gamepad
              </p>
            </div>
            <div>
              <TbPlaylistAdd className="icon" />
              <p>Add a game to your collection</p>
            </div>
            <div>
              <MdOutlineRateReview className="icon" />
              <p>Leave a review for a game</p>
            </div>
          </section>
          <section className="input-login">
            <h2>Login</h2>
            <form action="">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Log in</button>
            </form>
            <Link className="linkToSignup" to="/signup">
              <p>Don't have an account yet?</p>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login;
