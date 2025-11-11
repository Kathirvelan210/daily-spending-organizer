// src/Components/ProductCard.jsx
// Reusable component that displays product information
// Uses props to receive data from parent component
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function ProductCard({ product, showQuantity = false, showRating = false, isCartPage = false }) {
  const { addToCart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div className="product-card">
      {/* Product Image */}
      {product.image && (
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
      )}
      
      <div className="product-header">
        <h4>{product.name}</h4>
        <span className="product-category">{product.category}</span>
      </div>

      {/* Product Description */}
      {product.description && (
        <p className="product-description">{product.description}</p>
      )}

      <div className="product-price">₹{product.price.toFixed(2)}</div>

      {/* Stock Information */}
      {product.stock !== undefined && !isCartPage && (
        <div className="product-stock">
          {product.stock > 0 ? (
            <span className="in-stock">In Stock: {product.stock}</span>
          ) : (
            <span className="out-of-stock">Out of Stock</span>
          )}
        </div>
      )}

      {/* Quantity Controls for Cart Page */}
      {showQuantity && isCartPage && (
        <div className="quantity-controls">
          <button 
            onClick={() => handleQuantityChange(product.quantity - 1)}
            className="quantity-btn"
          >
            -
          </button>
          <span className="quantity-display">Qty: {product.quantity}</span>
          <button 
            onClick={() => handleQuantityChange(product.quantity + 1)}
            className="quantity-btn"
          >
            +
          </button>
        </div>
      )}

      {/* Simple Quantity Display */}
      {showQuantity && !isCartPage && (
        <div className="product-quantity">Qty: {product.quantity}</div>
      )}

      {/* Rating */}
      {showRating && product.rating && (
        <div className="product-rating">
          ⭐ {product.rating}/5
        </div>
      )}

      {/* Action Button */}
      <button 
        className="btn btn-secondary"
        onClick={isCartPage ? handleRemove : handleAddToCart}
        disabled={!isCartPage && product.stock === 0}
      >
        {isCartPage ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;