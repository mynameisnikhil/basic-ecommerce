const initialState = {
  values: {}
  // Data Structure is checkedValued is in one dictionary with true false.
  // Filters are also divided and store in array by their category, so It will be easy to iterate for products
  // values : { Ram : true}
  // categoryWise : [Ram]
};

export const checkedCategory = (state = initialState, action) => {
  switch (action.type) {
    case "CHECKED_FILTER_HANDLER":
      // getting out name and category
      let category = action.category;
      let name = action.name;

      // Checking value is already true or false in state to do operation accordingly
      // if value is already true we will set it to false and remove filter from filter category list

      if (state.values[name]) {
        let myState = { ...state };
        let nameIndex = state[category].indexOf(name);
        myState.values[name] = false;
        myState[category] = [
          ...state[category].slice(0, nameIndex),
          ...state[category].slice(nameIndex + 1)
        ];
        return myState;

        // if value is false we will set filter value to be false and add that filter in filter category list
      } else {
        let myState = { ...state };
        myState.values[name] = true;
        if (state[category]) {
          myState[category] = [...state[category], name];
          return myState;
        }
        myState[category] = [name];
        return myState;
      }
    case "CLEAR_ALL_FILTER":
      return { ...state, values: {} };
    case "CLEAR_FILTER":
      let s = action.name
      let my = {...state}
      my.values[s] = false
      let key = Object.keys(my).slice(1)
      
      for (let char of key){
        console.log(my[char]);
        let indexOfs = my[char].indexOf(s);
        
        
        if (indexOfs >= 0){
          my[char] = [
            ...state[char].slice(0, indexOfs),
            ...state[char].slice(indexOfs + 1)
          ];
          return my
        }

      }
      return {...state, values : {...state.values, [s] : false}}
    default:
      return state;
  }
};
