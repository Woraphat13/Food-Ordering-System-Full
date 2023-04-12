import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'


const HomePage = () => {
  return (
    <div className="container1">

    {}

      <h1 className="titleh">Welcome to Our Restaurant</h1>

      <p className="descriptionh">Good Food is the Foundation of Happiness.</p>

      <Link to = './Menu'>
        <button className="buttonh">Go to Menu</button>
      </Link>

    </div>
  );
};
export default HomePage