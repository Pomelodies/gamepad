import "./pagination.css";

const Pagination = ({ gameTotal, pageNum, setPageNum }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(gameTotal / 20); i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <div className="pageNumber">
      {pageNum > 100 ? (
        <button
          onClick={() => {
            setPageNum(pageNum - 100);
          }}
        >
          PreviousPrevious
        </button>
      ) : (
        <button
          onClick={() => {
            setPageNum(1);
          }}
        >
          PreviousPrevious
        </button>
      )}
      {pageNum > 10 && (
        <button
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
              {page > 2 ? (
                <button
                  onClick={() => {
                    setPageNum(page - 2);
                  }}
                >
                  {page - 2}
                </button>
              ) : (
                ""
              )}
              {page > 1 ? (
                <button
                  onClick={() => {
                    setPageNum(page - 1);
                  }}
                >
                  {page - 1}
                </button>
              ) : (
                ""
              )}
              <button
                key={index}
                onClick={() => {
                  setPageNum(page);
                }}
              >
                {page}
              </button>
              <button
                onClick={() => {
                  setPageNum(page + 1);
                }}
              >
                {page + 1}
              </button>
              <button
                onClick={() => {
                  setPageNum(page + 2);
                }}
              >
                {page + 2}
              </button>
            </>
          )
        );
      })}
      <button
        onClick={() => {
          setPageNum(pageNum + 10);
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          setPageNum(pageNum + 100);
        }}
      >
        NextNext
      </button>
    </div>
  );
};

export default Pagination;
