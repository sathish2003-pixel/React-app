import React from 'react';

const Pagination = ({ total, page, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);

  const handleClick = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <button onClick={() => handleClick(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>{` Page ${page} of ${totalPages} `}</span>
      <button onClick={() => handleClick(page + 1)} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
