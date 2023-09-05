import { current } from "@reduxjs/toolkit";
import React from "react";

const Pagination = ({ totalNumber, currentPage, onPageChange }) => {
  const totalPageCount = Math.ceil(totalNumber / 20);
  const showPagesBeforeAndAfter = 1;
  
  // Calculate the range of pages to display
  let startPage = Math.max(currentPage - showPagesBeforeAndAfter, 1);
  let endPage = Math.min(currentPage + showPagesBeforeAndAfter, totalPageCount);

  // Ensure that we always show the first and last page
  if (currentPage - showPagesBeforeAndAfter > 1) {
    startPage = Math.max(startPage, 1);
  }
  if (currentPage + showPagesBeforeAndAfter < totalPageCount) {
    endPage = Math.min(endPage, totalPageCount);
  }

  // Generate an array of page numbers to display
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
          >
        <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {startPage > 1 && (
          <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
            <a className="page-link" href="#" onClick={() => onPageChange(1)}>
              1
            </a>
          </li>
        )}
        {startPage > 2 && (
          <li className="page-item disabled">
            <a className="page-link" href="#">
              ...
            </a>
          </li>
        )}
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
        {endPage < totalPageCount && (
          <li className="page-item disabled">
            <a className="page-link" href="#">
              ...
            </a>
          </li>
        )}
        {endPage < totalPageCount && (
          <li
            className={`page-item ${
              currentPage === totalPageCount ? "active" : ""
            }`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(totalPageCount)}
            >
              {totalPageCount}
            </a>
          </li>
        )}
        <li
          className={`page-item ${
            currentPage === totalPageCount || totalPageCount===1 ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
