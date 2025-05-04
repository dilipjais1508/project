import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Sidebar from './component/Sidebar/Sidebar';
import ProductList from './component/ProductList/ProductList';
import Product from './component/ProductList/Product';
import Login from './component/Auth/Login';
import Signup from './component/Auth/Signup';
import './MainLayout.css'; // Create this file for layout styling

const MainLayout = () => (
  <div className="main-layout">
    <Sidebar />
    <ProductList />
  </div>
);

function AppContent() {
  const location = useLocation();
  const hideNavFooter = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <div className="App">
      {!hideNavFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onTabChange={tab => window.location.replace('/signup')} />} />
        <Route path="/signup" element={<Signup onTabChange={tab => window.location.replace('/login')} />} />
        <Route path="/products" element={<MainLayout />} />
      </Routes>
      {!hideNavFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;