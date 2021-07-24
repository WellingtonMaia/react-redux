import { Reducer } from "redux";
import { ActionTypes } from "../../constants";
import { ICartState } from "./types";
import produce from 'immer';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS: 
        const { product } = action.payload;
        const productInCartIndex = draft.items.findIndex(item => 
          item.product.id === product.id
        )
        
        if(productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++
        } else {
          draft.items.push({
              product,
              quantity: 1,
          });
        }
        
        break;
      case ActionTypes.ADD_PRODUCT_TO_CART_FAILURE:
          draft.failedStockCheck.push(action.payload.productId);
        break
        default:
          return draft
    }
  });
}

export default cart;