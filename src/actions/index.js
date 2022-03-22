export const increment  = () => {
    return {
        type : "INCREMENT"
    }
}

export const decrement  = () => {
    return {
        type : "DECREMENT"
    }
}

export const signIn  = () => {
    return {
        type : "SIGN_IN"
    }
}

export const sortHandler = (x) => {
  return {
    type: "SELECTION_HANDLER",
    payload : x
  };
};

// checked Filters Handler

;
export const checkedFiltersHandler = (x, y) => {
    return {
      type: "CHECKED_FILTER_HANDLER",
      name: x.name,
      category: y
    };
};


// Clear Out ALL Filter Handler
export const clearAllFilter = () => {
  return {
    type: "CLEAR_ALL_FILTER",
  };
};

// Clear Single Filter
export const clearFilter = x => {
  return {
    type: "CLEAR_FILTER",
    name : x
  };
};

export const addToCartHandler = e => {
  return {
    type : "ADD_TO_CART",
    product : e
  }
}
export const removeFromCartHandler = e => {
  return {
    type: "REMOVE_FROM_CART",
    index : e
  };
};
export const searchHandler = value => {
  return {
    type: "SEARCH_VALUE_CHANGE",
    payload : value
  };
};

// Using {type : "HANDLERS"} Directly 

// export const mobileHandler  = () => {
//     return {
//         type : "MOBILE_HANDLER"
//     }
// }
// export const laptopHandler  = () => {
//     return {
//         type : "LAPTOP_HANDLER"
//     }
// }
// // Chckbox Action Handlers
// export const gadgetHandler  = () => {
//     return {
//         type : "GADGET_HANDLER"
//     }
// }



