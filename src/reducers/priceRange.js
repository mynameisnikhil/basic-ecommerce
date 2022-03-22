import React from 'react'

const initialState = [5000, 50000]

export const priceRange = (state = initialState, action) => {
    switch (action.type) {
      case "CHANGE_SLIDER_VALUE" :
        return (state = action.payload);

      default:
        return state;
    }
    
}