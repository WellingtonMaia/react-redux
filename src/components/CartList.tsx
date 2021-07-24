import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { IState } from "../store";
import { ICartState } from "../store/modules/cart/types";

const Cart = () => {
  const cart = useSelector<IState, ICartState>(state => state.cart);
  const cartMemo = useMemo(() => {
    return cart
  }, [cart])
  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>  
      <tbody>
        {cartMemo.items.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}      
      </tbody>
    </table>
  )
}

export default Cart;