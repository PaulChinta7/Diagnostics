// store.js
import { createStore } from 'redux';


const initialState = {
  product:{},
  cart:[],
  subtotal:0
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
        case 'UPDATE_SUBTOTAL':
          return {
            ...state,
            subtotal: state.subtotal+action.payload
          };
          case 'INC_PRODUCT_QUANTITY':
          return {
            ...state,
            cart: state.cart.map((item)=>item.name===action.payload.name? {...item,quantity:item.quantity+1}:{...item})
          };
          case 'DEC_PRODUCT_QUANTITY':
            return {
              ...state,
              cart: state.cart.map((item)=>item.name===action.payload.name? {...item,quantity:item.quantity-1}:{...item})
            };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
