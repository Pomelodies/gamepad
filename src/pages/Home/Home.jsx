import "./home.css";
import { TbDeviceGamepad3Filled } from "react-icons/tb";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import Pagination from "../../components/Pagination/Pagination";

const Home = ({ search, setSearch }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [platform, setPlatform] = useState("all");
  const [type, setType] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const debouncedFetch = useMemo(
    () =>
      debounce(
        async (value, pageNum, platform, type, sortBy) => {
          // console.log(value);
          // console.log(pageNum);
          // console.log(platform);
          // console.log(type);
          // console.log(sortBy);

          let filters = "";
          let pages = "";
          let platformSelected = "";
          let typeSelected = "";
          let sortBySelected = "";

          if (pageNum) {
            pages = pages + `&page=${pageNum}`;
          }
          if (value) {
            filters = filters + `&search="${value}"`;
          }
          if (platform === "all") {
            platformSelected = "";
          } else {
            platformSelected =
              platformSelected + `&parent_platforms=${platform}`;
          }
          if (type === "all") {
            typeSelected = "";
          } else {
            typeSelected = typeSelected + `&genres=${type}`;
          }

          if (sortBy === "default") {
            sortBySelected = "";
          } else {
            sortBySelected = sortBySelected + `&ordering=${sortBy}`;
          }
          // console.log(filters);
          // console.log(pages);
          const response = await axios.get(
            `https://api.rawg.io/api/games?key=f60dfb57a6af4a60b940f680f44697bb&search_precise=true&page_size=20${pages}${filters}${platformSelected}${typeSelected}${sortBySelected}`
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
    debouncedFetch(search, pageNum, platform, type, sortBy);
  }, [search, debouncedFetch, pageNum, platform, type, sortBy]);

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

        {search && (
          <div className="filters">
            <div>
              <div>
                <label htmlFor="platform">Platform : </label>
                <select
                  name="platform"
                  id="platform"
                  onChange={(event) => {
                    setPlatform(event.target.value);
                  }}
                >
                  <option value="all">All</option>
                  <option value="1">PC</option>
                  <option value="2">Playstation</option>
                  <option value="3">Xbox</option>
                  <option value="7">Nintendo</option>
                </select>
              </div>
              <div>
                <label htmlFor="type">Type : </label>
                <select
                  name="type"
                  id="type"
                  onChange={(event) => {
                    setType(event.target.value);
                  }}
                >
                  <option value="all">All</option>
                  <option value="2">Shooter</option>
                  <option value="3">Adventure</option>
                  <option value="4">Action</option>
                  <option value="5">RPG</option>
                  <option value="14">Simulation</option>
                  <option value="51">Indie</option>
                  <option value="83">Platformer</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="sortBy">Sort By : </label>
                <select
                  name="sortBy"
                  id="sortBy"
                  onChange={(event) => {
                    setSortBy(event.target.value);
                  }}
                >
                  <option value="default">Default</option>
                  <option value="name">Name</option>
                  <option value="releaseDate">Release Date</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
              <button>Go Filters !</button>
            </div>
          </div>
        )}

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
