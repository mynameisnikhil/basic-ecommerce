const initialState = {
  selected: "Best Seller",
  options: [
    "Best Seller",
    "Price: High To Low",
    "Price : Low To High",
    "Rating"
  ]
};

export const sortOption = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTION_HANDLER":
        return {...state, selected : action.payload}
    default :
    return state
}}