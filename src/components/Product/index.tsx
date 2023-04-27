import { useDispatch } from "react-redux";
import { product } from "../../data/product";
import "./index.css";
import { addCart } from "../../store/cartSlice";

const Product = ({ id }: { id: string }) => {
  const oneProduct = product.filter((el) => {
    return el.id == Number(id);
  });
  const prod = oneProduct[0];

  const dispatch = useDispatch();

  const addCartClick = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addCart(prod));
  };

  return (
    <div className="product">
      <div className="container">
        <span
          className="product__close"
          onClick={(event) => {
            event.stopPropagation();
            window.history.back();
          }}
        ></span>
        <img src={prod.img} />
        <div className="product__info">
          <h2 className="product__title">{prod.title}</h2>
          <p className="product__price">
            {prod.newPrice}
            {prod.currecy}
          </p>
          <button className="product__btn" onClick={addCartClick}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
