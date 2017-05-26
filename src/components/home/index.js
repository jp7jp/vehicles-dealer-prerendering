import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeIndex extends Component {
  render() {
    return (
      <div className="home">
        <div className="carousel">
          <h3>Home Carrossel Placeholder</h3>
          <br />
          <h4>This project is intented to test prerendering with Netlify</h4>
          <br />
          <a href="https://github.com/jp7jp/vehicles-dealer-prerendering">GitHub Repo</a>
          <br /><br />
          <a href="https://www.netlify.com">
            <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
          </a>
        </div>
        <div className="buttons">
          <div className="d-flex flex-row justify-content-center">
            <div><Link to="./" className="nav-link">Home</Link></div>
            <div><Link to="./vehicles" className="nav-link">Vehicles</Link></div>
            <div><Link to="./stores" className="nav-link">Stores</Link></div>
            <div><Link to="./direct-sales" className="nav-link">Direct Sales</Link></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeIndex;
