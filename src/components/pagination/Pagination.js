import React from "react";

const Pagination = ({ totalNumber,currentPage,onPageChange }) => {
  const pageNumbers = Array.from({ length: totalNumber/20 }, (_, index) => index + 1);
  return (
    <nav aria-label="Page navigation">
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <a className="page-link" href="/" onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </a>
      </li>
      {pageNumbers.map((page) => (
        <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
          <a className="page-link" href="/" onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
      <li className={`page-item ${currentPage === totalNumber ? "disabled" : ""}`}>
        <a className="page-link" href="/" onClick={() => onPageChange(currentPage + 1)}>
          Next
        </a>
      </li>
    </ul>
    </nav>
  );
};

export default Pagination;
