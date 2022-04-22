
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function Pagination() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 5;

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`
     
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };
  return (

        <div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  )
    }
    export default Pagination;
