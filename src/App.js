// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { ExpenseProvider } from './Context/ExpenseContext';
import { CartProvider } from './Context/CartContext';
import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Admin from './Pages/Admin';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <ExpenseProvider>
        <CartProvider>
          {/* Important fix: add basename for GitHub Pages */}
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ExpenseProvider>
    </AuthProvider>
  );
}

export default App;
