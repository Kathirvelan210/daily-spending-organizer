import React from 'react';
import ProductCard from '../Components/ProductCard';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Coffee', price: 4.50, quantity: 2, category: 'Food' },
    { id: 2, name: 'Notebook', price: 12.99, quantity: 1, category: 'Supplies' },
    { id: 3, name: 'Lunch', price: 15.75, quantity: 1, category: 'Food' },
    { id: 4, name: 'Gas', price: 45.00, quantity: 1, category: 'Transport' }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="page-container">
      <div className="content-card">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.map(item => (
            <ProductCard 
              key={item.id} 
              product={item} 
              showQuantity={true}
            />
          ))}
        </div>
        <div className="cart-total">
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;