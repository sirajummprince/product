import React, { Component } from "react";

class ProductDetails extends Component {
  componentWillUnmount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  render() {
    if (this.props.loading) {
      return null; //app is not ready (fake request is in process)
    }
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
}

export default ProductDetails;
