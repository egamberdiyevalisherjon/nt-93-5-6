import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return products.map((product) => (
    <div className="col-md-3 our-product-class" key={product.id}>
      <div className="card h-100 d-flex flex-column">
        <img
          src={product.image}
          alt={product.title}
          height={300}
          className="card-img-top"
        />
        <div className="card-body flex-fill d-flex flex-column">
          <h2 className="card-title mb-3">{product.title}</h2>
          <p className="card-text flex-fill">{product.description}</p>
          <div className="d-flex justify-content-between">
            <span>${product.price}</span>
            <span>
              <i className="fa-solid fa-star text-warning"></i>
              {product.rating.rate} / {product.rating.count}
            </span>
          </div>
        </div>
        <div className="card-footer">
          <Link
            className="btn btn-success w-100"
            to={`/products/${product.id}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default ProductList;
