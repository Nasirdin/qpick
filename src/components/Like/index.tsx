import { useEffect, useState } from "react";
import Card from "../Card";
import "./index.css";

const Like = () => {
  const getProd = localStorage.getItem("data");
  const res = getProd !== null ? JSON.parse(getProd) : [];

  const [click, setClick] = useState(false);

  useEffect(() => {}, [click]);

  return (
    <div className="like">
      <div className="container">
        <h2 className="like__title">Избранное</h2>
        <div className="like__cards">
          {res.length !== 0 ? (
            res.map(
              (el: {
                id: number;
                title: String;
                newPrice: Number;
                oldPrice: Number;
                img: string;
                rating: Number;
                currecy: String;
                dataLike: boolean;
              }) => (
                <Card key={el.id} el={el} click={click} setClick={setClick} />
              )
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

export default Like;
