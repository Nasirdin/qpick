import Logo from "../../img/logo-qpick.svg";
import Like from "../../img/Vector-like.svg";
import Cart from "../../img/Vector-cart.svg";
import Arrow from "../../img/Vector-arrow.svg";

import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__block-1">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>

          <p className="header__select">
            Выбрать модель телефон <img src={Arrow} alt="Arrow" />
          </p>
        </div>
        <div className="header__block-2">
          <Link to="./like">
            <img src={Like} alt="like-logo" />
          </Link>
          <Link to="./cart">
            <img src={Cart} alt="cart-logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
