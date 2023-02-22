let initialState = { items: [], total: 0 };

function cartReducer(state = initialState, action) {
  if (action.type === "ADD_TO_CART") {
    return { ...state, items: [...state.items, action.payload] };
  }
  return state;
}

export default cartReducer;
