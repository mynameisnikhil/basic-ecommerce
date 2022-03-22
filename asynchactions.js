const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default

const axios = require('axios')

// State 

let initialState = {
    loading : false,
    users : null,
    error : ""
    
};

// Actions

// Action Creator 

const fetchUserRequest = () => {
    return { type : "u_request"}
    
}

const fetchUserSuccess = (data) => {
    return {
        type :  "request_success",
        payload : data
    
    }
}

const fetchUserFail = error => {
    return {
        type : "request_failed",
        payload : error
    }
}

// Reducers

const reducers = (state = initialState, actions ) => {
    switch(actions.type){
        case "u_request": 
        return {
            ...state, 
            loading : true
        }
        case "request_success": 
        return {
            ...state, 
            loading : false, 
            users : actions.payload,
            error : ""
        }

        case "request_failed": return {
            ...state, loading : false, error : actions.payload, error : ""
        }
        default : return state
    }

}

const FetchAllUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            
            //user.data is an actual data
            const users = response.data.map(data => data.id)
            
            dispatch(fetchUserSuccess(users))
            
        })
        .catch(error => {
            console.log('fail')
            dispatch(fetchUserFail(error.message))})
        
    }
}
const store = createStore(reducers, applyMiddleware(thunk))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(FetchAllUsers())
