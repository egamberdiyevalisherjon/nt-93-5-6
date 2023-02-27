import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { decItemCount, incItemCount, removeFromCart } from "../rt/slices/cart";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  let total = items.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.product.price * currentItem.count;
  }, 0);

  function handleIncItemCount(id) {
    dispatch(incItemCount(id));
  }
  
  function handleDecItemCount(id) {
    dispatch(decItemCount(id));
  }

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));

    toast("Removed", { type: "info" });
  }

  return (
    <div>
      <div className="container py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Your Cart</h1>
          <p className="h3">Total: ${total.toFixed(2)}</p>
        </div>
        <ul className="list-group">
          {items.map((item) => (
            <li
              className="list-group-item d-flex align-items-center gap-3"
              key={item.product.id}
            >
              <img width={100} height={100} src={item.product.image} alt="" />
              <h2 className="text-truncate">{item.product.title}</h2>
              <p className="ms-auto m-0">${item.product.price}</p>
              <div className="d-flex align-items-center gap-3">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleDecItemCount(item.product.id)}
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  onClick={() => handleIncItemCount(item.product.id)}
                  className="btn btn-secondary"
                >
                  +
                </button>
              </div>
              <span>${(item.product.price * item.count).toFixed(2)}</span>

              <div className="btn-group">
                <button
                  onClick={() => handleRemoveFromCart(item.product.id)}
                  className="btn btn-danger"
                >
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
