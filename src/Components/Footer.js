import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";


const Footer =()=> {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
       
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>

        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <a className='text-reset fw-bold' href='https://instagram.com/dsnum1'>
          Divyansh Sharma
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;