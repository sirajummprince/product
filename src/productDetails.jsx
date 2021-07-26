import React, {Component} from react;

function ProductDetails(){
    return (
        <div
          style={{
            margin: "10px",
            border: "1px solid blue",
          }}
        >
          <p>Product Name:{this.props.currentProduct?.name}</p>
          <p>Product Description:{this.props.currentProduct?.description}</p>
          <p>Product Price:{this.props.currentProduct?.price}</p>
          <p>Product Category:{this.props.currentProduct?.category}</p>
          <button onClick={this.props.backToList}>Homepage</button>
        </div>
      );
}