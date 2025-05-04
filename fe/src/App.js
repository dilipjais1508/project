import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Sidebar from './component/Sidebar/Sidebar';
import ProductList from './component/ProductList/ProductList'
// import Product from './component/ProductList/Product';
import './MainLayout.css'; // Create this file for layout styling

const MainLayout = () => (
  <div className="main-layout">
    <Sidebar />
    <ProductList />
  </div>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <MainLayout />
      {/* <Product /> */}
      <Footer />
    </div>
  );
}

export default App;