import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { items } = useSelector(({ cart }) => cart);
  console.log(items);
  return (
    <div>
      <div className="container py-5">
        <h1>Your Cart</h1>
        <ul className="list-group">
          {items.map((item) => (
            <li
              className="list-group-item d-flex align-items-center gap-3"
              key={item.id}
            >
              <img width={100} height={100} src={item.image} alt="" />
              <h2 className="text-truncate">{item.title}</h2>
              <p className="ms-auto m-0">${item.price}</p>
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-secondary">-</button>
                <span>1</span>
                <button className="btn btn-secondary">+</button>
              </div>
              <span>${item.price}</span>

              <div className="btn-group">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-times"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
