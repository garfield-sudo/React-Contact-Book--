import React, { useState } from "react";
import PaginationPages from "./PaginationPages";

const ContactsPagination = ({ totalPages, turnPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const range = Array.from({ length: totalPages }, (_, i) => i + 1);

  function handlePagination(e) {
    if (e.target.innerText === "Previous" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      turnPage(currentPage - 1);
    } else if (
      e.target.innerText === "Next page" &&
      currentPage !== totalPages
    ) {
      setCurrentPage(currentPage + 1);
      turnPage(currentPage + 1);
    } else if (e.target.innerText !== currentPage) {
      setCurrentPage(parseInt(e.target.innerText));
      turnPage(parseInt(e.target.innerText));
    }
  }

  return (
    <div className="block pt-3 px-3">
      <nav className="pagination" role="navigation" aria-label="pagination">
        <button
          onClick={handlePagination}
          className="button is-outlined pagination-previous"
          title="This is the first page"
          disabled={currentPage === 1 || totalPages === 0}
        >
          Previous
        </button>
        <button
          onClick={handlePagination}
          className="button is-outlined pagination-next"
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next page
        </button>

        <ul className="pagination-list">
          {range.map((pageNum) => (
            <PaginationPages
              key={pageNum}
              pageNum={pageNum}
              currentPage={currentPage}
              gotoPage={handlePagination}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ContactsPagination;
