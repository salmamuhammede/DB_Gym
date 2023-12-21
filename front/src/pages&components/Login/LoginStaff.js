import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
const StaffLogin = () => {
  const [info, setInfo] = useState({
    SID: 0,
    Password: "",
  });
  
  function handleLoginUser(res) {
    const data = res.token;
    localStorage.setItem("token", res.data.token);
    console.log(res.data.token);
    alert("logged in successfully")
  }
  const [response, setResponse] = useState(null);
  ;

  let profileButton = null;
  async function login(event) {
    event.preventDefault();
    console.log([info]);
    await axios
      .post("http://localhost:8082/staff/login", info)
      .then(handleLoginUser)
      .catch((err) => console.log(err));
    //await axios.get("http://localhost:8082/staff/login").then(console.log("salam")).catch(err => console.log(err));
     const response = await axios({
      method: "get",
      url: `http://localhost:8082/staff/login`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setResponse(response); // Update the response state

    console.log(response.data);
    
   
  }
  if (response&&response.data.staff.Is_Manager === 0) {
        
    profileButton = (
      <Link to="/TrainerProfile">
        <button className="btn1">
          Profile
        </button>
      </Link>
    );
  } else {
    profileButton = (
      <Link to="/">
        <button className="btn1">
          Profile
        </button>
      </Link>
    );
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
                    setInfo({ ...info, SID: parseInt(token.target.value) });
                    console.log(info.SID);
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
              <card className="buttons">
  <button className="btn1" type="submit">
    Login
  </button>
  
    {profileButton}
 
</card>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
