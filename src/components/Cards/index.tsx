import { product } from "../../data/product.js";
import Card from "../Card";
import "./index.css";

const Cards = () => {
  return (
    <div>
      <p className="card__type">Наушники</p>
      <ul className="cards">
        {product.map((el) => (
          <Card key={el.id} el={el} />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
