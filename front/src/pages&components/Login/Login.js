import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [info, setInfo] = useState({
    TID: 0,
    Password: "",
  });
  function handleLoginUser(res) {
    const data = res.token;
    localStorage.setItem("token", res.data.token);
    console.log(res.data.token);
  }
  async function login(event) {
    event.preventDefault();
    console.log([info]);
    await axios
      .post("http://localhost:8082/trainee/login", info)
      .then(handleLoginUser)
      .catch((err) => console.log(err));
    //await axios.get("http://localhost:8082/trainee/login").then(console.log("salam")).catch(err => console.log(err));
    const response = await axios({
      method: "get",
      url: `http://localhost:8082/trainee/login`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response.data);
  }
  return (
    <div className="Login">
      <div className="container-Log">
        <h1 className="logheader">Welcome</h1>
        <div className="main-con-log">
          <form onSubmit={login}>
            <div className="form-log">
              <card>                
                <input
                  className="inputfield"
                  type="id"
                  
                  placeholder="Enter your ID"
                  required
                  onChange={(token) => {
                    setInfo({ ...info, TID: parseInt(token.target.value) });
                    console.log(info.TID);
                  }}
                />
              </card>
              <card>                
                <input
                  className="inputfield"
                  type="password"                  
                  placeholder="Please enter your password"
                  required
                  onChange={(token) => {
                    setInfo({ ...info, Password: token.target.value });
                    console.log(info.Password);
                  }}
                />
              </card>
              <card>
                <button className="btn1" type="submit">
                  Login
                </button>
              </card>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
