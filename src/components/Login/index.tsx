import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const navigate = useNavigate();

  const authUser = localStorage.getItem("user");
  const resUser = authUser !== null ? JSON.parse(authUser) : [];

  const users = localStorage.getItem("users");
  const res = users !== null ? JSON.parse(users) : [];

  useEffect(() => {
    if (resUser.length !== 0) {
      const findUser = res.filter(
        (user: { email: String; password: String }) => {
          return (
            resUser[0].user === user.email && resUser[0].pass === user.password
          );
        }
      );

      if (findUser.length <= 0) {
      } else {
        navigate("/home");
      }
    } else {
    }
  }, [resUser]);

  const sumbitHendler = (event: React.FormEvent) => {
    const findUser = res.filter((user: { email: String; password: String }) => {
      return user.email === emailValue && user.password === passwordValue;
    });

    if (findUser.length <= 0) {
      alert("error");
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify([
          {
            user: emailValue,
            pass: passwordValue,
          },
        ])
      );

      navigate("/home");
    }
  };

  return (
    <form className="login" onSubmit={sumbitHendler}>
      <h2 className="login__title">Login</h2>
      <label className="login__label">
        <input
          className="login__input"
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          value={emailValue}
          type="email"
          placeholder="E-mail"
        />
      </label>
      <label className="login__label">
        <input
          className="login__input"
          onChange={(e) => {
            setPasswordValue(e.target.value);
          }}
          value={passwordValue}
          type="password"
          placeholder="password"
        />
      </label>
      <button className="login__btn">Login</button>
    </form>
  );
};

export default Login;
