import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

import './Paging.css';
// className='Paging-color'
// className='Paging-color'
// className='Paging-color'
// className='Paging-color'
const Paging = () => {
  return (
    <>
      <nav className='position-absolute start-50 translate-middle my-5'>
          <MDBPagination className='mb-0'>
          <MDBPaginationItem disabled>
            {/* href='#' */}
            <MDBPaginationLink tabIndex={-1} aria-disabled='true'>
              Previous
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem className='page-item active ' aria-current='page'>
            <MDBPaginationLink tag='span' className='page-link'>
              1<span className='visually-hidden'>(current)</span>
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink  href='#'>2</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink  href='#'>3</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink  href='#'>4</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink  href='#'>5</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>Next</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      </nav>
    </>
  );
}

export default Paging;