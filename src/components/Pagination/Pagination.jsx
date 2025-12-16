import "./pagination.css";

const Pagination = ({ gameTotal, pageNum, setPageNum }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(gameTotal / 20); i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <div className="pageNumber">
      {pageNum > 100 && (
        <button
          className="previousHundred"
          onClick={() => {
            setPageNum(pageNum - 100);
          }}
        >
          PreviousPrevious
        </button>
      )}
      {pageNum > 10 && (
        <button
          className="previousTen"
          onClick={() => {
            setPageNum(pageNum - 10);
          }}
        >
          Previous
        </button>
      )}
      {pages.map((page, index) => {
        return (
          pageNum === page && (
            <>
              {page > 2 && (
                <button
                  className="previousMinusTwo"
                  onClick={() => {
                    setPageNum(page - 2);
                  }}
                >
                  {page - 2}
                </button>
              )}
              {page > 1 && (
                <button
                  className="previousMinusOne"
                  onClick={() => {
                    setPageNum(page - 1);
                  }}
                >
                  {page - 1}
                </button>
              )}
              <button
                className="actualPage"
                key={index}
                onClick={() => {
                  setPageNum(page);
                }}
              >
                {page}
              </button>
              {Math.ceil(gameTotal / 20) > 1 && (
                <button
                  className="nextOne"
                  onClick={() => {
                    setPageNum(page + 1);
                  }}
                >
                  {page + 1}
                </button>
              )}
              {Math.ceil(gameTotal / 20) > 2 && (
                <button
                  className="nextTwo"
                  onClick={() => {
                    setPageNum(page + 2);
                  }}
                >
                  {page + 2}
                </button>
              )}
            </>
          )
        );
      })}
      {Math.ceil(gameTotal / 20) > 10 && (
        <button
          className="nextTen"
          onClick={() => {
            setPageNum(pageNum + 10);
          }}
        >
          Next
        </button>
      )}
      {pageNum < Math.ceil(gameTotal / 20) - 100 && (
        <button
          className="nextHundred"
          onClick={() => {
            setPageNum(pageNum + 100);
          }}
        >
          NextNext
        </button>
      )}
    </div>
  );
};

export default Pagination;
