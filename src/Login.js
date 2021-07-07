import React, { useState } from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt=""
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt=""
        />
      </div>
      <Button type="sumbit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;
