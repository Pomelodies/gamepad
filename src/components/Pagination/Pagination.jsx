import "./pagination.css";

const Pagination = ({ setPageNum }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(897526 / 20); i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <div className="pageNumber">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setPageNum(page * 100 - 100);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
