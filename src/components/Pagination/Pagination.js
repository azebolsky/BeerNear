import React from "react";
import "./Pagination.css";
import { Button } from "semantic-ui-react";

const Pagination = ({ numberOfPages, currentPage, handlePageClick, searchBeerResults }) => {
  return (
    <div className="Pagination-Style">
      {!numberOfPages ? "" :
        <>
          <div>
            {searchBeerResults < 23 ? "" :
              <>
                <p>{currentPage} of {numberOfPages}</p>
                <Button onClick={handlePageClick}>
                  {currentPage <= numberOfPages
                    ? `Page ${currentPage + 1}`
                    : numberOfPages - (numberOfPages - 1)}
                </Button>
              </>
            }
          </div>
        </>
      }
    </div>
  );
};

export default Pagination;
