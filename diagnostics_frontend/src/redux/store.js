// store.js
import { createStore } from 'redux';


const initialState = {
  product:{},
  cart:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DESCRIPTION':
      return {
        ...state,
        product: action.payload
      };
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart,action.payload]
        };
        case 'DELETE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((obj)=>obj.name!==action.payload.name)
        };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
