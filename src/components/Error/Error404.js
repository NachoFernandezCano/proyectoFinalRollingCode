import { Link } from 'react-router-dom';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import './error404.css';

const Error404 = () => {
  return ( 
    <div className='errorContainer d-flex flex-column align-items-center justify-content-center'>
      <div className=''>
        <span className='eTitle'>ERROR 404</span>
        <p></p>
      </div>
      <div>
        <Link>
        <FaHome/>
        Volver al inicio
        </Link>
      </div>
    </div>
   );
}
 
export default Error404;