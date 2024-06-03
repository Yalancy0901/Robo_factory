import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddProduct from './components/Products/AddProduct';
import ProductList from './components/Products/ProductList';
import Orders from './components/Orders/Orders';
import EditProduct from './components/Products/EditProduct'; // Import EditProduct component

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (productData) => {
    setProducts([...products, productData]);
  };

  const handleUpdateProduct = (index, updatedProduct) => {
    const updatedProducts = products.map((product, idx) =>
      idx === index ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, idx) => idx !== index));
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard products={products} />} />
          <Route path="/add-product" element={<AddProduct onSubmit={handleAddProduct} />} />
          <Route
            path="/product-list"
            element={<ProductList products={products} onDelete={handleDeleteProduct} />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/edit-product/:index"
            element={<EditProduct products={products} onUpdate={handleUpdateProduct} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
