import banerImg from "../../img/baner.png";

import "./index.css"

const Baner = () => {
  return (
    <div className="baner">
      <h1 className="baner__title">Аксессуары для Iphone 13 Pro Max</h1>
      <img className="baner__img" src={banerImg} alt="" />
    </div>
  );
};

export default Baner;

