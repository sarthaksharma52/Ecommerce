import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import LoginRegister from './pages/LoginRegister';
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';
import SuccessOrder from './pages/SuccessOrder';
import About from './components/About';
import Testimonials from './components/Testimonials';

function App(){
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/order-success" element={<SuccessOrder />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;