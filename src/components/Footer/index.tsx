import { Link } from "react-router-dom";
import Logo from "../../img/logo-qpick.svg";
import lang from "../../img/lang.svg";
import Vk from "../../img/VK.svg";
import Instagram from "../../img/Instagram.svg";
import Telegram from "../../img/Telegram.svg";
import Whatsapp from "../../img/Whatsapp.svg";

import "./index.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <img src={Logo} alt="logo" />
        <div className="footer__box footer__links">
          <Link className="footer__link" to="/like">
            Избранное
          </Link>
          <Link className="footer__link" to="/cart">
            Корзина
          </Link>
          <Link className="footer__link" to="/contacts">
            Контакты
          </Link>
        </div>
        <div className="footer__box">
          <p className="footer__text">Условия сервиса</p>
          <ul className="footer__items">
            <li>
              <img src={lang} alt="lang-icon" />
            </li>
            <li className="footer__item">Каз</li>
            <li className="footer__item active">Рус</li>
            <li className="footer__item">Eng</li>
          </ul>
        </div>
        <div className="footer__sotial">
          <a href="#">
            <img src={Vk} alt="vk" />
          </a>
          <a href="#">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="#">
            <img src={Telegram} alt="telegram" />
          </a>
          <a href="#">
            <img src={Whatsapp} alt="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
