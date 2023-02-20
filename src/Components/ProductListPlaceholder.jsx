import React from "react";

const ProductListPlaceholder = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
    <div className="col-md-3 our-product-class" key={item}>
      <div className="card" aria-hidden="true">
        <div className="card-img-top placeholder-glow">
          <div style={{ aspectRatio: "1" }} className="placeholder col-12"></div>
        </div>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            href="#"
            tabIndex="-1"
            className="btn btn-success disabled placeholder col-12"
          ></a>
        </div>
      </div>
    </div>
  ));
};

export default ProductListPlaceholder;
