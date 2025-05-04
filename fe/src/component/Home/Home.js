import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">DISCOVER OUR PRODUCTS</h1>
        <p className="home-desc">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
      <div className="home-toolbar">
        <span className="home-items-count">2452 ITEMS</span>
        <span className="home-filter">
          <span className="home-filter-arrow">&#60;&#60;</span> FILTER &amp; FILTERS
        </span>
        <span className="home-sort">
          RECOMMENDED <span className="home-sort-arrow">▼</span>
        </span>
      </div>
    </div>
  );
};

export default Home; 