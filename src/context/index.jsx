import { createContext, useState } from "react";

export const cartContext = createContext();

function Provider(props) {
  const [items, setItems] = useState([]);

  function addToCart(p) {
    setItems((i) => [...i, { product: p, count: 1 }]);
  }

  function removeFromCart(id) {
    setItems((items) => items.filter((item) => item.product.id !== id));
  }

  return (
    <cartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default Provider;
