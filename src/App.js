import './App.css';
import Products from './ProductPage'
import React, {useState, setState} from 'react'
import ProductPage from './ProductPage';
import ProductDetails from './ProductDetails';


function App() {
  const [products, setproducts] = useState([
    {
      name: `product1`,
      description: `product1 description`,
      price: `$10`,
      category: `item1`,
    },
    {
      name: `product2`,
      description: `product2 description`,
      price: `$20`,
      category: `item2`,
    },
  ]);

  const [currentProduct, setCurrentProduct]= useState()

  const selectProduct = (details)=>{
    setCurrentProduct({...this.state, currentProduct:details})
  };

  const backToList=()=>{
    setproducts({...this.state, currentProduct:null})
  };

  return (
    <div style={{
      padding:'50px'
    }}>
      {!this.state.currentProduct && <ProductPage products={this.state.products} selectProduct={this.selectProduct}/>}
      {this.state.currentProduct && <ProductDetails currentProduct={this.state.currentProduct} backToList={this.backToList}/>}
    </div>
  );
}

export default App;
