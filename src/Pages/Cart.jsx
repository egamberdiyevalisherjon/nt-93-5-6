import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(({ cart }) => cart);

  let total = items.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.product.price * currentItem.count;
  }, 0);

  function handleIncItemCount(id) {
    dispatch({
      type: "INC_ITEM_COUNT",
      payload: id,
    });
  }

  function handleDecItemCount(id) {
    dispatch({
      type: "DEC_ITEM_COUNT",
      payload: id,
    });
  }

  function handleRemoveFromCart(id) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });

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
