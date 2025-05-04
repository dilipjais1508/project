import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

const HomeWithProducts = () => (
  <>
    <Home />
    <MainLayout />
  </>
);

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function AuthRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? <Navigate to="/products" replace /> : children;
}

function AppContent() {
  const location = useLocation();
  const hideNavFooter = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <div className="App">
      {!hideNavFooter && <Navbar />}
      <Routes>
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login onTabChange={tab => window.location.replace('/signup')} />
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <Signup onTabChange={tab => window.location.replace('/login')} />
            </AuthRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeWithProducts />
            </PrivateRoute>
          }
        />
        {/* Add more protected routes as needed */}
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