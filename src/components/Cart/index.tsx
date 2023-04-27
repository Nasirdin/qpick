import { useEffect, useState } from "react";
import Card from "../Card";
import "./index.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const reduxData = useSelector(
    (state: {
      cart: {
        product: [];
      };
    }) => {
      return state.cart.product;
    }
  );

  return (
    <div className="cart">
      <div className="container">
        <h2 className="cart__title">Корзина</h2>
        <div className="cart__cards">
          {reduxData.length !== 0 ? (
            reduxData.map(
              (el: {
                id: number;
                title: string;
                newPrice: Number;
                oldPrice: Number;
                img: string;
                rating: Number;
                currecy: String;
                dataLike: boolean;
              }) => <Card key={el.id} el={el} />
            )
          ) : (
            <div>
              <h2>Корзина пуста</h2>
              <p>Но это никогда не поздно исправить :)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
