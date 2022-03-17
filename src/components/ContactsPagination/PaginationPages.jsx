import React from "react";

const PaginationPages = ({ pageNum, currentPage, gotoPage }) => {
  return (
    <li>
      <a
        href="#"
        onClick={gotoPage}
        className={`pagination-link ${
          pageNum === currentPage ? "is-current" : null
        }`}
        aria-label={`${
          pageNum === currentPage ? `Page ${pageNum}` : `Goto page ${pageNum}`
        }`}
        aria-current="page"
      >
        {pageNum}
      </a>
    </li>
  );
};

export default PaginationPages;
