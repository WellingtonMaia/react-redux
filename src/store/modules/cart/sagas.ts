import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { IState } from '../..';
import api from '../../../services/api';
import { ActionTypes } from '../../constants';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './action';

type CheckProductToStockRequest = ReturnType<typeof addProductToCartRequest>;

interface StockResponseImp {
  id: number;
  quantity: number;
}

function* checkProductToStock({ payload }: CheckProductToStockRequest){
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(
      item => item.product.id === product.id
      )?.quantity ?? 0;
  });

  const availableStockRequest: AxiosResponse<StockResponseImp> = yield call(api.get, `stock/${product.id}`)
  
  if(availableStockRequest.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }

}

export default all([
  takeLatest(ActionTypes.ADD_PRODUCT_TO_CART_REQUEST, checkProductToStock)
]);