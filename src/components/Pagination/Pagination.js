import React from "react";
import "./Pagination.css";
import { Button } from "semantic-ui-react";

const Pagination = ({ numberOfPages, currentPage, handlePageClick, searchBeerResults }) => {
  return (
    <div className="Pagination-Style">
      {!numberOfPages ? "" :
        <>
          <div className="Pagination-Bottom">
            {searchBeerResults < 23 ? "" :
              <>
                <p>{currentPage} of {numberOfPages}</p>
                <Button onClick={handlePageClick} icon='right arrow' labelPosition='right' style={{ marginBottom: "10px" }}
                  content={currentPage <= numberOfPages
                    ? `Page ${currentPage + 1}`
                    : numberOfPages - (numberOfPages - 1)}
                />
              </>
            }
          </div>
        </>
      }
    </div>
  );
};

export default Pagination;
