import { Route, Routes } from "react-router";
import Login from "../Login";
import "./index.css";
import SignUp from "../SingUp";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth__block">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
