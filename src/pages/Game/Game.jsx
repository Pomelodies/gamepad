import "./game.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import truncate from "../../utils/truncate";

const Game = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${params.id}?key=f60dfb57a6af4a60b940f680f44697bb`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log("error in useEffect =>", error);
    }
  }, [params.id]);

  return isLoading ? (
    <div>Data is loading, please wait...!</div>
  ) : (
    <main>
      <div className="container">
        <h2>{data.name_original}</h2>
        <div className="game-info">
          <img
            src={data.background_image}
            alt={`${data.id} + ${data.name_original}`}
          />
          <aside className="game-info-aside">
            <div>
              <button>Save to Collection</button>
              <button>Add a Review</button>
            </div>
            <div>
              <div>
                <h3>Plateforms</h3>
                <div className="plateforms">
                  {data.platforms
                    ? data.platforms.map((platform) => {
                        // console.log(platform);
                        return <p>{platform.platform.name}</p>;
                      })
                    : "N/A"}
                </div>
              </div>
              <div>
                <h3>Genre</h3>
                <div className="genres">
                  {data.genres
                    ? data.genres.map((genre) => {
                        // console.log(genre);
                        return <p>{genre.name}</p>;
                      })
                    : "N/A"}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3>Released date</h3>
                <p>{data.released ? data.released : "N/A"}</p>
                {/* {console.log(typeof data.released)} */}
              </div>
              <div>
                <h3>Developers</h3>
                <div className="developers">
                  {data.developers
                    ? data.developers.map((developper) => {
                        // console.log(genre);
                        return <p>{developper.name}</p>;
                      })
                    : "N/A"}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3>Publisher</h3>
                <div>
                  {data.publishers
                    ? data.publishers.map((publisher) => {
                        // console.log(genre);
                        return <p>{publisher.name}</p>;
                      })
                    : "N/A"}
                </div>
              </div>
              <div>
                <h3>Age rating</h3>
                <p>{data.esrb_rating ? data.esrb_rating.name : "Not rated"}</p>
              </div>
            </div>
            <h3>About</h3>
            <p>
              {data.description_raw ? truncate(data.description_raw) : "N/A"}
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Game;
