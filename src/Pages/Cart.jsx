// src/Pages/Cart.jsx
// Shopping cart page that displays all items added to cart
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ProductCard from '../Components/ProductCard';

function Cart() {
  const { cartItems, getTotal, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Checkout successful! Total: ₹${getTotal().toFixed(2)}`);
    clearCart();
  };

  return (
    <div className="page-container">
      <div className="content-card">
        <h2>Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <p>Add some products to get started!</p>
          </div>
        ) : (
          <>
            <p className="cart-count">You have {cartItems.length} item(s) in your cart</p>
            
            <div className="cart-items">
              {cartItems.map(item => (
                <ProductCard 
                  key={item.id} 
                  product={item} 
                  showQuantity={true}
                  isCartPage={true}
                />
              ))}
            </div>
            
            <div className="cart-total">
              <h3>Total: ₹{getTotal().toFixed(2)}</h3>
              <div className="cart-actions">
                <button 
                  onClick={clearCart} 
                  className="btn btn-outline"
                >
                  Clear Cart
                </button>
                <button 
                  onClick={handleCheckout} 
                  className="btn btn-primary"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;