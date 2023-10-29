import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://أكاديمية نور القرءان.com/'>
          أكاديمية نور القرءان
        </a>
      </div>
    </MDBFooter>
  );
}