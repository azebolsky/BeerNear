import React from "react";
import "./Pagination.css";

const Pagination = ({ numberOfPages, currentPage, handlePageClick }) => {
  return (
    <div className="Pagination-Style">
      {currentPage} of {numberOfPages}
      <div>
        <button onClick={handlePageClick}>
          {currentPage <= numberOfPages
            ? `Page ${currentPage + 1}`
            : numberOfPages - (numberOfPages - 1)}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
