import React, {Component} from react;

function Products(){
    return (
        <div>
          {this.props.products.map((product) => {
            return (
              <div
                style={{
                  margin: "10px",
                  border: "1px solid blue",
                }}
                onClick={()=> this.props.selectProduct(product)}
              >
                <p>Product Name:{product.name}</p>
                <p>Product Description:{product.description}</p>
                <p>Product Price:{product.price}</p>
                <p>Product Category:{product.category}</p>
              </div>
            );
          })}
        </div>
      );
}

export default Products;