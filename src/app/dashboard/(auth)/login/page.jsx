"use client";
import React from "react";
import { signIn } from "next-auth/react";
import {
  GoogleLoginButton,
  FacebookLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";

function Login() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Login with Google</button>
      <GoogleLoginButton onClick={() => alert("Google Login")} />
      <FacebookLoginButton onClick={() => alert("Facebook Login")} />
      <AppleLoginButton onClick={() => alert("Apple Login")} />
    </div>
  );
}

export default Login;
