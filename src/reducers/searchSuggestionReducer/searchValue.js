

const initialState = "";

export const searchValue = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_VALUE_CHANGE":
      return action.payload
    default:
      return state;
  }
};
