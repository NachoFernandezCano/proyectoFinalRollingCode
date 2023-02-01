import { Link } from 'react-router-dom';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import './error404.css';

const Error404 = () => {
  return ( 
    <div className='errorContainer d-flex flex-column align-items-center justify-content-center'>
      <div className='d-flex flex-column align-items-center justify-content-center text-center'>
        <span className='eTitle'>Oops!</span>
        <span className='eTitle'>ERROR 404</span>
        <p className='text-white m-5'>The resource requested could not be found on this server!</p>
      </div>
      <div>
        <button></button>
        <Link className='eBackBtn' to={'/'}>
        <FaHome className='eIcon'/>
        Volver al inicio
        </Link>
      </div>
    </div>
   );
}
 
export default Error404;