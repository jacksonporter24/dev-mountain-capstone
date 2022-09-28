import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import ProfileForm from "../pages/ProfileForm";
import { Drawer } from "./drawer";
import "./user.css";

function User() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [usernameReg, setUsernameReg] = useState([...data]);
  const [passwordReg, setPasswordReg] = useState([...data]);
  const [userFirstName, setUserFirstName] = useState([...data]);
  const [userLastName, setUserLastName] = useState([...data]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [usernameData, setUserNameData] = useState([]);
  const [usernameLogin, setUsernameLogin] = useState([]);
  const [passwordLogin, setPasswordLogin] = useState([]);

  useEffect(() => {
    axios.get("api/users").then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    axios.post("api/username").then((res) => setUserNameData(res.data));
  }, []);

  const handleUsernameInput = (event) => {
    setUsernameReg(event.target.value);
    console.log("handleUsernameINput hit");
  };

  const handlePasswordInput = (event) => {
    setPasswordReg(event.target.value);
  };

  const handleFirstNameInput = (event) => {
    setUserFirstName(event.target.value);
  };

  const handleLastNameInput = (event) => {
    setUserLastName(event.target.value);
  };

  const handleUsernameLogin = (event) => {
    setUsernameLogin(event.target.value);
  };

  const handlePasswordLogin = (event) => {
    setPasswordLogin(event.target.value);
  };

  const handleRegisterClick = () => {
    axios
      .post("/api/users", {
        username: usernameReg,
        password: passwordReg,
        firstname: userFirstName,
        lastname: userLastName,
      })
      .then((response) => {
        navigate(`user/${response.data.userid}`);
      });
  };

  const handleLoginClick = () => {
    axios
      .post("/api/username", {
        user: usernameLogin,
        password: passwordLogin
      })
      .then((response) => {
        navigate(`user/${response.data.userid}`)
        console.log(response);
      }).catch(error => console.log(error));
  };

  return (
    <div className="home-page">
      <h1 className="plot-your-book">PLOT YOUR BOOK</h1>
      <div className="login-form">
        <h1 className="login-text">SIGN IN</h1>
        <input
          className="input-box"
          type="text"
          placeholder=" Username..."
          onChange={handleUsernameLogin}
        />
        <input
          className="input-box"
          type="password"
          placeholder=" Password..."
          onChange={handlePasswordLogin}
        />
        <br></br>
        <button onClick={handleLoginClick} className="button-5" type="button">
          SIGN IN
        </button>
      </div>
      <br></br>
      <h1 className="or-text">OR</h1>
      <button className="button-5" onClick={() => setShowDrawer(true)}>
        SIGN UP FOR FREE
      </button>
      <Drawer open={showDrawer} setOpen={setShowDrawer}>
        <ProfileForm
          handleUsernameInput={handleUsernameInput}
          handlePasswordInput={handlePasswordInput}
          handleFirstNameInput={handleFirstNameInput}
          handleLastNameInput={handleLastNameInput}
          handleRegisterClick={handleRegisterClick}
          handleLoginClick={handleLoginClick}
        />
      </Drawer>
    </div>
  );
}

export default User;
