import "./home.css";
import { TbDeviceGamepad3Filled } from "react-icons/tb";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import Pagination from "../../components/Pagination/Pagination";
import getSelectedFilter from "../../utils/getSelectedFilter";

const Home = ({ search, setSearch }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [platform, setPlatform] = useState("All");
  const [type, setType] = useState("All");
  const [sortBy, setSortBy] = useState("Default");

  if (search) {
    getSelectedFilter(platform, setPlatform);
    console.log(platform);
  }

  const debouncedFetch = useMemo(
    () =>
      debounce(
        async (value, pageNum, platform, type, sortBy) => {
          // console.log(value);
          // console.log(pageNum);
          let filters = "";
          let pages = "";
          if (pageNum) {
            pages = pages + `&page=${pageNum}`;
          }
          if (value) {
            filters = filters + `&search="${value}"`;
          }
          // console.log(filters);
          // console.log(pages);
          const response = await axios.get(
            `https://api.rawg.io/api/games?key=f60dfb57a6af4a60b940f680f44697bb${pages}${filters}&search_precise=true&page_size=20`
          );
          // console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        },
        300,
        { maxWait: 500 }
      ),
    []
  );

  useEffect(() => {
    debouncedFetch(search, pageNum);
  }, [search, debouncedFetch, pageNum]);

  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       let filters = "";
  //       if (search) {
  //         filters = filters + `&search="${search}"`;
  //       }
  //       console.log(filters);
  //       const response = await axios.get(
  //         `https://api.rawg.io/api/games?key=f60dfb57a6af4a60b940f680f44697bb&${filters}&search_precise="true"`
  //       );
  //       // console.log(response.data);
  //       setData(response.data);
  //       setIsLoading(false);
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.log("error => ", error);
  //   }
  // }, [search]);

  return isLoading ? (
    <main>
      <p>Data is loading, please wait...!</p>
    </main>
  ) : (
    <main>
      <div className="container">
        <div className="logo">
          <TbDeviceGamepad3Filled className="icon" />
          <h1>Gamepad</h1>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for a game..."
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {search ? <h2>Search result for "{search}"</h2> : ""}
          <p>Search {data.count.toLocaleString()} games</p>
        </div>
        {search ? "" : <h3>Most Relevance Games</h3>}

        <div className="filters">
          <div>
            <div>
              <label htmlFor="platform">Platform : </label>
              <select name="platform" id="platform" defaultValue="all">
                <option value="all">All</option>
                <option value="ps5">PS5</option>
                <option value="xbox">Xbox</option>
                <option value="switch">Switch</option>
              </select>
            </div>

            <div>
              <label htmlFor="type">Type : </label>
              <select name="type" id="type">
                <option value="all">All</option>
                <option value="rpg">RPG</option>
                <option value="indie">Indie</option>
                <option value="platformer">Platformer</option>
                <option value="adventure">Adventure</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="sortBy">Sort By : </label>
              <select name="sortBy" id="sortBy">
                <option value="default">Default</option>
                <option value="name">Name</option>
                <option value="releaseDate">Release Date</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <button>Go Filters !</button>
          </div>
        </div>

        <div className="all-games">
          {data.results.map((game) => {
            // console.log(game);
            return (
              <Link
                to={`/games/${game.id}`}
                key={game.id}
                className="link-article"
              >
                <article>
                  <p>{game.name}</p>
                  <img
                    src={game.background_image}
                    alt={`cover of ${game.name}`}
                  />
                </article>
              </Link>
            );
          })}
        </div>
        <Pagination
          gameTotal={data.count}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      </div>
    </main>
  );
};

export default Home;
