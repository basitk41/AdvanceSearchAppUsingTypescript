import React from "react";
import _ from "lodash";
export interface Props {
    setCurrentPage:(page:number)=>void,
    currentPage:number,
    length:number,
    pageSize:number
  }
const Pages: React.FC<Props> = ({ setCurrentPage, currentPage, length, pageSize }) => {
  const pagesCount = Math.ceil(length / pageSize);
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="page-links" style={{display:'flex' , justifyContent:"flex-end"}}>
      <nav aria-label="...">
        <ul className="pagination">
          {pages.length>1?pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </li>
          )):null}
        </ul>
      </nav>
    </div>
  );
};

export default Pages;