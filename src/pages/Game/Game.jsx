import "./game.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
          <aside>
            <div>
              <button>Save to Collection</button>
              <button>Add a Review</button>
            </div>
            <div>
              <div>
                <p>Plateforms</p>
                {data.parent_platforms.map((platform) => {
                  console.log(platform);
                  return <span>{platform.platform.name}</span>;
                })}
              </div>
              <div>
                <p>Genre</p>
                <p></p>
              </div>
            </div>
            <div>
              <div>
                <p>Released date</p>
                <p></p>
              </div>
              <div>
                <p>Developper</p>
                <p></p>
              </div>
            </div>
            <div>
              <div>
                <p>Publisher</p>
                <p></p>
              </div>
              <div>
                <p>Age rating</p>
                <p></p>
              </div>
            </div>
            <div>
              <p>About</p>
              <p></p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Game;
