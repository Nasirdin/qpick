import Logo from "../../img/logo-qpick.svg";
import Like from "../../img/Vector-like.svg";
import Cart from "../../img/Vector-cart.svg";
import Arrow from "../../img/Vector-arrow.svg";

import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__block-1">
          <a href="#">
            <img src={Logo} alt="" />
          </a>

          <p className="header__select">
            Выбрать модель телефон <img src={Arrow} alt="Arrow" />
          </p>
        </div>
        <div className="header__block-2">
          <a href="#">
            <img src={Like} alt="like-logo" />
          </a>
          <a href="#">
            <img src={Cart} alt="cart-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
