import React from 'react';
import './Product.css';
import './ProductList'

const Product = ({ image, name, status, tag, desc}) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
        {tag && <div className="product-tag">{tag}</div>}
        {status && <div className="product-status">{status}</div>}
      </div>
      <div className="product-name">{name}</div>
      <div className="product-desc">{desc}</div>
      
    </div>
  );
};

export default Product; 