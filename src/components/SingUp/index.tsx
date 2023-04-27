import { useState } from "react";
import "./index.css";
const SignUp = () => {
  const [userValue, setUserValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const submitHendler = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      user: userValue,
      email: emailValue,
      password: passwordValue,
    };

    const users = localStorage.getItem("users");
    const res = users !== null ? JSON.parse(users) : [];

    if (res.length <= 0) {
      localStorage.setItem("users", JSON.stringify([userData]));
    } else {
      console.log(res);

      const findUser = res.filter((user: { email: string }) => {
        return user.email === emailValue;
      });

      if (findUser.length <= 0) {
        localStorage.setItem("users", JSON.stringify([...res, userData]));
      } else {
        alert("аккаунт уже зарегистрирован");
      }
    }
  };

  return (
    <form className="signup" onSubmit={submitHendler}>
      <h2 className="signup__title">Sign Up</h2>
      <label className="signup__label">
        <input
          className="signup__input"
          onChange={(e) => {
            setUserValue(e.target.value);
          }}
          value={userValue}
          type="text"
          placeholder="username"
        />
      </label>
      <label className="signup__label">
        <input
          className="signup__input"
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          value={emailValue}
          type="email"
          placeholder="email"
        />
      </label>
      <label className="signup__label">
        <input
          className="signup__input"
          onChange={(e) => {
            setPasswordValue(e.target.value);
          }}
          value={passwordValue}
          type="password"
          placeholder="password"
        />
      </label>
      <button className="signup__btn">signup</button>
    </form>
  );
};

export default SignUp;
