let initialState = JSON.parse(
  localStorage.getItem("cart-items") || "{ items: [], total: 0 }"
);

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = {
        ...state,
        items: [...state.items, { product: action.payload, count: 1 }],
      };

      localStorage.setItem("cart-items", JSON.stringify(newState));
      return newState;
    }
    case "REMOVE_FROM_CART": {
      let newState = {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };

      localStorage.setItem("cart-items", JSON.stringify(newState));
      return newState;
    }

    case "INC_ITEM_COUNT": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    }
    case "DEC_ITEM_COUNT": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count <= 1 ? item.count : item.count - 1 }
            : item
        ),
      };
    }
    default: {
      return state;
    }
  }
}

export default cartReducer;
