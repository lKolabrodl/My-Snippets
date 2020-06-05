import React from "react";

const Pagination = ({ postPerPage, totalPost, selectNumber }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((item, i) => (
          <li key={i} className="page-item">
            <a
              onClick={() => selectNumber(item)}
              href="!#"
              className="page-link"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
