import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const product = [
    { name: `Pen`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$10`, category: `Stationary` },
      { name: `Pencil`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$12`, category: `Stationary` },
      { name: `Eraser`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$5`, category: `Stationary` },
      { name: `Printer`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$100`, category: `IT` },
      { name: `Scanner`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$150`, category: `IT` },
      { name: `Processor`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$200`, category: `IT` },
      { name: `Mango`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$70`, category: `Fruit` },
      { name: `Apple`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$150`, category: `Fruit` },
      { name: `Jackfruit`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$50`, category: `Fruit` },
      { name: `Shoe`, description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`, price: `$300`, category: `Footwear` },
  ];
  const [products, setProducts] = useState(product);
  const [currentProduct, setCurrentProduct] = useState(null);

  selectProduct = (details)=>{
    this.setState({...this.state, currentProduct:details})
  };

  backToList=()=>{
    this.setState({...this.state, currentProduct:null})
  };

  return (
      <div style={{
        padding:'50px'
      }}>
        {!this.state.currentProduct && <Products products={this.state.products} selectProduct={this.selectProduct}/>}
        {this.state.currentProduct && <ProductDetails currentProduct={this.state.currentProduct} backToList={this.backToList}/>}
      </div>
    );
}

export default App;
