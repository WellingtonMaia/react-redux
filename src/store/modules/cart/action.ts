import { ActionTypes } from "../../constants";

interface ProductImp {
  id: number;
  title: string;
  price: number;
}

export function addProductToCartRequest(product: ProductImp) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_REQUEST,
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product: ProductImp) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_FAILURE,
    payload: {
      productId,
    }
  }
}