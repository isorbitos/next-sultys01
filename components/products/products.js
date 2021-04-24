import React from "react";

import Product from "./product";
import ProductModal from "./productModal";


function Products (props){
  const products_data = props.products
  return (

    <div>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">MŪSŲ SULTYS</h2>
          </div>
          <div className="row">
            {products_data.map((juice) => (
              <Product key={juice.id} juice={juice} />
            ))}
          </div>
        </div>
        {products_data.map((juice) => (
              <ProductModal key={juice.id} juice={juice} />
            ))}
        
      </section>
    </div>
  );
}

export default Products;
