import React from 'react';

function ProductCard({ product, showQuantity = false, showRating = false }) {
  return (
    <div className="product-card">
      <div className="product-header">
        <h4>{product.name}</h4>
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-price">₹{product.price}</div>
      {showQuantity && (
        <div className="product-quantity">Qty: {product.quantity}</div>
      )}
      {showRating && (
        <div className="product-rating">
          ⭐ {product.rating}/5
        </div>
      )}
      <button className="btn btn-secondary">
        {showQuantity ? 'Remove' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;