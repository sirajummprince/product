import logo from "./logo.svg";
import "./App.css";
import ProductList from "./ProductList";
import React, { useState } from "react";
import ProductDetail from "./ProductDetail";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: `Product 1`,
      description: `Product 1 Description`,
      price: `$10`,
      category: `Category 1`,
    },
    {
      id: 2,
      name: `Product 2`,
      description: `Product 2 Description`,
      price: `$20`,
      category: `Category 2`,
    },
    {
      id: 3,
      name: `Product 3`,
      description: `Product 3 Description`,
      price: `$30`,
      category: `Category 3`,
    },
  ]);

  const [currentProduct, setCurrentProduct] = useState([]);

  const selectProducts = (details) => {
    setCurrentProduct({ ...currentProduct, currentProduct: details });
  };

  const backToList = () => {
    setCurrentProduct({ ...products, currentProduct: null });
  };

  return (
    <div>
      {currentProduct ? (
        <ProductList products={products} selectProducts={selectProducts} />
      ) : (
        <ProductDetail
          currentProduct={currentProduct}
          backToList={backToList}
        />
      )}
    </div>
  );
}

export default App;
