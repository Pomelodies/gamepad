import "./signup.css";
import { CgProfile } from "react-icons/cg";
import { TbPlaylistAdd } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                try {
                  const response = await axios.post(
                    "http://localhost:3000/signup",
                    {
                      username: username,
                      email: email,
                      password: password,
                    }
                  );
                  // console.log(response);
                  
                } catch (error) {
                  error.response
                    ? setErrorMessage(error.response.data.message)
                    : console.log(error);
                }
              }}
            >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
              {/* <input type="file" /> */}
              {errorMessage && <p className="error">{errorMessage}</p>}
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
