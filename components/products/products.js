import React from "react";

import Product from "./product";
import ProductModal from "./productModal";

const DUMMY_DATA = [
  {
    id: "asultys",
    name: "ANTANINIŲ OBUOLIŲ SULTYS",
    picture: "antaniniai.jpg",
    composition:"100 %  antaninių obuolių sultys",
    taste:"saldžiarūgščių ir saldžių obuolių"
  },
  {
    id: "osultys",
    name: "OBUOLIŲ SULTYS",
    picture: "pexels-polina-tankilevitch-4110507.jpg",
    composition:"100 % obuolių sultys",
    taste:"saldžiarūgščių ir saldžių obuolių"
  },
];

const Products = () => (
  <div>
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">MŪSŲ SULTYS</h2>
        </div>
        <div className="row">
          {DUMMY_DATA.map((juice) => (
            <Product key={juice.id} juice={juice} />
          ))}
        </div>
      </div>
      {DUMMY_DATA.map((juice) => (
            <ProductModal key={juice.id} juice={juice} />
          ))}
      
    </section>
  </div>
);

export default Products;
