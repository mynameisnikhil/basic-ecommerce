import React from "react"
import {Cart} from './components/cartPage/cart'
import {BodyContainer} from './components/productsAndFilter/productsAndFilters'
import {ProductPage} from './components/productPage/productPage'
import {SortBy} from './components/productsAndFilter/sortBy'
import {AppBar} from "./components/Header/appBar.js"
import SideMenu from './components/Header/sideMenu'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './toggleMenu.css'
// // Actions

// const increment = () => {
//   return {type : 'INCREMENT'}
// }
// const decrement = () => {
//   return {type : 'DECREMENT'}
// }

// // Reducers 

// const counter = ( state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT" :
//       return state + 1;
//     case "DECREMENT" :
//       return state - 1;
//   }
// }

// Making Store 




function App() {
  
  let toggle = useSelector(state => state.SideMenuToggle); 
  const Dispatch = useDispatch()
  let menuOff = () => toggle ? Dispatch({ type: 'MENU_TOGGLE' }) : null;

   return (
     <Router>
       <div>
         <div className={toggle ? "menuWrapper menuSlide" : "menuWrapper"}>
           <SideMenu />
         </div>
         <div
           onClick={() => menuOff()}
           className={toggle ? "bodyWrapper bodySlide" : "bodyWrapper"}
         >
           <AppBar />
           <Switch>
             <Route exact path="/cart" component={Cart} />
             <Route exact path="/:category/:brand/:product/:indexValue" component={ProductPage} />
             <Route path="/:category" component={BodyContainer} />
           </Switch>
         </div>
       </div>
     </Router>
   );
}

// // Store Creation
// // Store takes a Reducer as Argument

// let store = createStore(counter)

// //Display 

// store.subscribe(() => console.log(store.getState()))

// // Dispatch


// store.dispatch(increment())
// store.dispatch(decrement())


export default App;
