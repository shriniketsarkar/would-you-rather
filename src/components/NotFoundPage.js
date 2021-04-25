import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='page-not-found-container'>
      <label>404</label>
      <p>Page not found. </p>
      <p>Please use the Home link below to start over.</p>
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;