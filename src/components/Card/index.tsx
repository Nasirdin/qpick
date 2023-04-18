import Star from "../../img/star.svg";
import Like from "../../img/like-2.svg";
import LikeActive from "../../img/like-active.svg";

import "./index.css";
import { useState } from "react";

interface productInter {
  el: {
    id: Number;
    title: String;
    newPrice: Number;
    oldPrice: Number;
    img: string;
    rating: Number;
    currecy: String;
    dataLike: boolean;
  };
  setClick?: (click: boolean) => void;
  click?: boolean;
}

const Card = ({ el, setClick, click }: productInter) => {
  const [like, setLike] = useState(el.dataLike);

  const likeHandler = () => {
    const getData = localStorage.getItem("data");
    const res = getData !== null ? JSON.parse(getData) : [];

    if (res.length === 0) {
      el.dataLike = true;
      localStorage.setItem("data", JSON.stringify([el]));
    } else {
      if (!like) {
        el.dataLike = true;
        const newData = [...res, el];
        localStorage.setItem("data", JSON.stringify(newData));
      } else {
        const newData = res.filter((prod: { id: Number }) => {
          return prod.id !== el.id;
        });
        localStorage.setItem("data", JSON.stringify(newData));
      }
    }
    setLike(!like);
    setClick?.(!click)
  };

  return (
    <div className="card">
      {!like ? (
        <img
          onClick={likeHandler}
          className="card__like"
          src={Like}
          alt="img"
        />
      ) : (
        <img
          onClick={likeHandler}
          className="card__like"
          src={LikeActive}
          alt="img"
        />
      )}

      <div className="card__img">
        <img src={el.img} alt="img" />
      </div>

      <div className="card__info">
        <h2>{el.title}</h2>
        <p className="card__price">
          <span className="card__price-span card__price-span_new">
            {el.newPrice.toString()}
            {el.currecy}
          </span>
          <span className="card__price-span card__price-span_old">
            {el.oldPrice.toString()}
            {el.currecy}
          </span>
        </p>
      </div>
      <p className="card__rating">
        <img src={Star} alt="" />
        {el.rating.toString()}
      </p>
    </div>
  );
};

export default Card;
