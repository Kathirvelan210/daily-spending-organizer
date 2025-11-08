import React from 'react';
import ProductCard from '../Components/ProductCard';

function Products() {
  const products = [
    { id: 1, name: 'Premium Coffee', price: 24.99, category: 'Beverages', rating: 4.8 },
    { id: 2, name: 'Wireless Headphones', price: 89.99, category: 'Electronics', rating: 4.5 },
    { id: 3, name: 'Organic Tea Set', price: 34.50, category: 'Beverages', rating: 4.7 },
    { id: 4, name: 'Smart Watch', price: 199.99, category: 'Electronics', rating: 4.6 },
    { id: 5, name: 'Yoga Mat', price: 45.00, category: 'Fitness', rating: 4.4 },
    { id: 6, name: 'Protein Powder', price: 55.99, category: 'Fitness', rating: 4.3 }
  ];

  return (
    <div className="page-container">
      <div className="content-card">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showRating={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;