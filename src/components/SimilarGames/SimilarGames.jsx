import axios from "axios";
import { useState, useEffect } from "react";
import "./similarGames.css";
import { Link } from "react-router-dom";

const SimilarGames = ({ genreTab }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(genreTab); ['Adventure', 'Simulation', 'Indie']
  let genresFilter = "";

  for (let i = 0; i < genreTab.length; i++) {
    genresFilter = genresFilter + genreTab[i] + ",";
  }

  genresFilter = genresFilter.slice(0, genresFilter.length - 1).toLowerCase();
  // console.log(genresFilter);

  // Faire une requête de ce type :
  // https://api.rawg.io/api/games?key=f60dfb57a6af4a60b940f680f44697bb&genres=indie,action,rpg
  console.log(
    `https://api.rawg.io/api/games?key=f60dfb57a6af4a60b940f680f44697bb&genres=${genresFilter}`
  );

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=f60dfb57a6af4a60b940f680f44697bb&genres=${genresFilter}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log("error in useEffect =>", error);
    }
  }, [genresFilter]);

  return isLoading ? (
    <div>Data is loading, please wait...</div>
  ) : (
    <div className="similarGame-section">
      {data.results.map((game, index) => {
        // console.log(game.name);
        if (index > 5 && index < 11) {
          // console.log(game.name);
          return (
            <Link to={`/games/${game.id}`}>
              <article className="similarGame-article">
                <img src={game.background_image} alt={`${game.name} picture`} />
                <p>{game.name}</p>
              </article>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default SimilarGames;
