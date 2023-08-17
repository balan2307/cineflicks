import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

function Paginate(props) {
    const [itemOffset, setItemOffset] = useState(0);

    const pageCount = props.pageCount;
  
   
    const handlePageClick = (event) => {

      console.log("clicked")
      props.onPageChange(event.selected + 1)

    };
  
    return (
      <>
      
        <ReactPaginate
          previousLabel={null}
          nextLabel={null}
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          
          pageCount={pageCount}
          className='flex justify-center gap-2 paginate p-5'
 
        />
      </>
    );




}

export default Paginate
