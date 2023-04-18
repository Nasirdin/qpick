import { useEffect, useState } from "react";
import { product } from "../../data/product.js";
import Card from "../Card";
import "./index.css";

const Cards = () => {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const getProd = localStorage.getItem("data");
    const res = getProd !== null ? JSON.parse(getProd) : [];
    setData(res);

    if (data.length !== 0) {
      product.map((prod) => {
        return data.map((localProd: { id: number }) => {
          if (prod.id === localProd.id) {
            prod.dataLike = true;
            return prod;
          } else {
            return prod;
          }
        });
      });
    }
  }, [click]);

  return (
    <div>
      <p className="card__type">Наушники</p>
      <div className="cards">
        {product.map((el) => (
          <Card key={el.id} el={el} setClick={setClick} click={click} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
