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

  const debouncedFetch = useMemo(
    () =>
      debounce(
        async (value, pageNum) => {
          console.log(value);
          console.log(pageNum);
          let filters = "";
          let pages = "";
          if (pageNum) {
            pages = pages + `&page=${pageNum}`;
          }
          if (value) {
            filters = filters + `&search="${value}"`;
          }
          console.log(filters);
          console.log(pages);
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
