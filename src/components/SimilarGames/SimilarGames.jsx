import axios from "axios";
import { useState, useEffect } from "react";
import "./similarGames.css";

const SimilarGames = ({ genreTab }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(genreTab);

  // Faire une requête de ce type :
  // https://api.rawg.io/api/games?key=f60dfb57a6af4a60b940f680f44697bb&genres=indie,action,rpg

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://api.rawg.io/api/games?key=f60dfb57a6af4a60b940f680f44697bb&genres=indie"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log("error in useEffect =>", error);
    }
  }, []);

  return isLoading ? (
    <div>Data is loading, please wait...</div>
  ) : (
    <div className="similarGame-section">
      {data.results.map((game, index) => {
        // console.log(game.name);
        if (index < 5) {
          // console.log(game.name);
          return (
            <article className="similarGame-article">
              <img src={game.background_image} alt={`${game.name} picture`} />
              <p>{game.name}</p>
            </article>
          );
        }
      })}
    </div>
  );
};

export default SimilarGames;
