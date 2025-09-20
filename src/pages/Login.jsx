import React, { useState } from "react";
import Title from "../components/common/Title";
import Button from "../components/common/Button";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="border-t pt-14">
      <form className="flex flex-col items-center gap-4 w-[90%] sm:w-96 m-auto text-gray-700">
        <div className="text-2xl">
          <Title text2={currentState}></Title>
        </div>

        {currentState === "Login" ? (
          ""
        ) : (
          <input
            className="w-full px-3 py-2 border border-gray-800"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="w-full px-3 py-2 border border-gray-800"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full px-3 py-2 border border-gray-800"
          type="password"
          placeholder="Password"
        />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forget yout password</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("SignUp")}
              className="cursor-pointer"
            >
              Create accout
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer"
            >
              Login here
            </p>
          )}
        </div>
        <Button onClick={(e) => e.preventDefault()}>
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
