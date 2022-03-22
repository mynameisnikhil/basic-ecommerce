import allTitles from "../data/productsTitle";

const initialState = allTitles;

export const searchSuggestions = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}