import React from "react";
import "./Pagination.css";

const Pagination = ({ numberOfPages, currentPage, handlePageClick, searchBeerResults }) => {
  return (
    <div className="Pagination-Style">
      {!numberOfPages ? "" :
        <>
          <div>
            {searchBeerResults < 23 ? "" :
              <>
                <p>{currentPage} of {numberOfPages}</p>
                <button onClick={handlePageClick}>
                  {currentPage <= numberOfPages
                    ? `Page ${currentPage + 1}`
                    : numberOfPages - (numberOfPages - 1)}
                </button>
              </>
            }
          </div>
        </>
      }
    </div>
  );
};

export default Pagination;
