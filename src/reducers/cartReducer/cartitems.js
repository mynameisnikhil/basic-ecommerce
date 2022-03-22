const initialState = []

export const cartItems = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
          let product = action.product
          if (!product.Quantity) {
            product["Quantity"] = 1;
          }
          if (state.length > 0){
            let copyState = [...state];
            for (let char of copyState){
                if (product.title === char.title){
                  char.Quantity = char.Quantity + 1
                  return copyState
                }
            }
            return [...state, product]
          }else{
            return [product]
          }
        return;
      case "REMOVE_FROM_CART":
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];
      default:
        return state;
    }
}