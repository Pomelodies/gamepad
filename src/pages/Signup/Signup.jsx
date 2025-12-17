import "./signup.css";
import { CgProfile } from "react-icons/cg";
import { TbPlaylistAdd } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main>
      <div className="container">
        <div className="signup">
          <section className="info-signup">
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
          <section className="input-signup">
            <h2>Sign Up</h2>
            <form action="">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <input type="file" />
              <button>Sign Up</button>
            </form>
            <Link className="linkToLogin" to="/login">
              <p>Already have an account?</p>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Signup;
