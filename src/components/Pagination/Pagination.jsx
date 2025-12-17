import "./pagination.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";

const Pagination = ({ gameTotal, pageNum, setPageNum }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(gameTotal / 20); i++) {
    pages.push(i);
  }
  // console.log(pages);
  return (
    <div className="pageNumber">
      {pageNum > 100 && (
        <button
          className="previousHundred"
          onClick={() => {
            setPageNum(pageNum - 100);
          }}
        >
          <RxDoubleArrowLeft />
        </button>
      )}
      {pageNum > 10 && (
        <button
          className="previousTen"
          onClick={() => {
            setPageNum(pageNum - 10);
          }}
        >
          <RiArrowLeftSLine />
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
          <RiArrowRightSLine />
        </button>
      )}
      {pageNum < Math.ceil(gameTotal / 20) - 100 && (
        <button
          className="nextHundred"
          onClick={() => {
            setPageNum(pageNum + 100);
          }}
        >
          <RxDoubleArrowRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
