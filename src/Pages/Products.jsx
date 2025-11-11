// src/Pages/Products.jsx
// This page displays all available products with filtering options
import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';

function Products() {
  // Extended product data with images, descriptions, and stock
  const allProducts = [
    { 
      id: 1, 
      name: 'Premium Coffee', 
      price: 24.99, 
      category: 'Beverages', 
      rating: 4.8,
      stock: 50,
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=300&fit=crop',
      description: 'Rich and aromatic premium coffee beans'
    },
    { 
      id: 2, 
      name: 'Wireless Headphones', 
      price: 89.99, 
      category: 'Electronics', 
      rating: 4.5,
      stock: 25,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      description: 'High-quality wireless headphones with noise cancellation'
    },
    { 
      id: 3, 
      name: 'Organic Tea Set', 
      price: 34.50, 
      category: 'Beverages', 
      rating: 4.7,
      stock: 40,
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=300&h=300&fit=crop',
      description: 'Premium organic tea collection'
    },
    { 
      id: 4, 
      name: 'Smart Watch', 
      price: 199.99, 
      category: 'Electronics', 
      rating: 4.6,
      stock: 15,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      description: 'Feature-rich smartwatch with fitness tracking'
    },
    { 
      id: 5, 
      name: 'Yoga Mat', 
      price: 45.00, 
      category: 'Fitness', 
      rating: 4.4,
      stock: 60,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop',
      description: 'Non-slip yoga mat for all fitness levels'
    },
    { 
      id: 6, 
      name: 'Protein Powder', 
      price: 55.99, 
      category: 'Fitness', 
      rating: 4.3,
      stock: 35,
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=300&h=300&fit=crop',
      description: 'High-quality whey protein powder'
    },
    { 
      id: 7, 
      name: 'Running Shoes', 
      price: 129.99, 
      category: 'Fitness', 
      rating: 4.7,
      stock: 20,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      description: 'Comfortable running shoes with excellent support'
    },
    { 
      id: 8, 
      name: 'Bluetooth Speaker', 
      price: 79.99, 
      category: 'Electronics', 
      rating: 4.5,
      stock: 30,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      description: 'Portable Bluetooth speaker with amazing sound'
    },
    { 
      id: 9, 
      name: 'Green Tea', 
      price: 19.99, 
      category: 'Beverages', 
      rating: 4.6,
      stock: 75,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop',
      description: 'Organic green tea with antioxidants'
    },
    { 
      id: 10, 
      name: 'Laptop Stand', 
      price: 49.99, 
      category: 'Electronics', 
      rating: 4.4,
      stock: 45,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      description: 'Ergonomic laptop stand for better posture'
    },
    { 
      id: 11, 
      name: 'Resistance Bands', 
      price: 29.99, 
      category: 'Fitness', 
      rating: 4.5,
      stock: 55,
      image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300&h=300&fit=crop',
      description: 'Set of resistance bands for home workouts'
    },
    { 
      id: 12, 
      name: 'Coffee Maker', 
      price: 149.99, 
      category: 'Beverages', 
      rating: 4.8,
      stock: 18,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop',
      description: 'Automatic coffee maker with timer'
    },
    { 
      id: 13, 
      name: 'Wireless Mouse', 
      price: 39.99, 
      category: 'Electronics', 
      rating: 4.3,
      stock: 65,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop',
      description: 'Ergonomic wireless mouse'
    },
    { 
      id: 14, 
      name: 'Dumbbell Set', 
      price: 99.99, 
      category: 'Fitness', 
      rating: 4.6,
      stock: 22,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300&h=300&fit=crop',
      description: 'Adjustable dumbbell set for strength training'
    },
    { 
      id: 15, 
      name: 'Herbal Tea Collection', 
      price: 27.99, 
      category: 'Beverages', 
      rating: 4.7,
      stock: 42,
      image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=300&h=300&fit=crop',
      description: 'Variety pack of herbal teas'
    },
    { 
      id: 16, 
      name: 'USB-C Hub', 
      price: 59.99, 
      category: 'Electronics', 
      rating: 4.4,
      stock: 38,
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop',
      description: 'Multi-port USB-C hub for laptops'
    },
    { 
      id: 17, 
      name: 'Jump Rope', 
      price: 15.99, 
      category: 'Fitness', 
      rating: 4.2,
      stock: 80,
      image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=300&h=300&fit=crop',
      description: 'Speed jump rope for cardio workouts'
    },
    { 
      id: 18, 
      name: 'Espresso Machine', 
      price: 299.99, 
      category: 'Beverages', 
      rating: 4.9,
      stock: 12,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop',
      description: 'Professional espresso machine'
    },
    { 
      id: 19, 
      name: 'Mechanical Keyboard', 
      price: 119.99, 
      category: 'Electronics', 
      rating: 4.7,
      stock: 28,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop',
      description: 'RGB mechanical gaming keyboard'
    },
    { 
      id: 20, 
      name: 'Foam Roller', 
      price: 34.99, 
      category: 'Fitness', 
      rating: 4.5,
      stock: 48,
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300&h=300&fit=crop',
      description: 'High-density foam roller for muscle recovery'
    }
  ];

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  // Filter products based on selected filters
  const filteredProducts = allProducts.filter(product => {
    // Category filter
    if (selectedCategory !== 'All' && product.category !== selectedCategory) {
      return false;
    }

    // Price range filter
    if (priceRange === 'Under 50' && product.price >= 50) return false;
    if (priceRange === '50-100' && (product.price < 50 || product.price > 100)) return false;
    if (priceRange === 'Over 100' && product.price <= 100) return false;

    return true;
  });

  return (
    <div className="page-container">
      <div className="content-card">
        <h2>Our Products</h2>
        <p>Browse our collection of {allProducts.length} amazing products</p>
        
        {/* Filter Section */}
        <div className="filters">
          <div className="filter-group">
            <label>Category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Price Range:</label>
            <select 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Prices</option>
              <option value="Under 50">Under ₹50</option>
              <option value="50-100">₹50 - ₹100</option>
              <option value="Over 100">Over ₹100</option>
            </select>
          </div>
        </div>

        <p className="results-count">Showing {filteredProducts.length} products</p>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showRating={true}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-results">
            <p>No products found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;