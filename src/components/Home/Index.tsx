import { useDispatch } from "react-redux";
import Baner from "../Baner";
import Cards from "../Cards";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        
        <Baner />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
//
