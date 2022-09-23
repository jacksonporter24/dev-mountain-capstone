import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
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

  useEffect(() => {
    axios.get("/api/users").then((res) => setData(res.data));
    console.log(data);
  }, []);

  const handleUsernameInput = (event) => {
    setUsernameReg(event.target.value);
    console.log("handleUsernameINput hit");
  };

  const handlePasswordInput = (event) => {
    setPasswordReg(event.target.value);
    console.log("handle password input is hit");
  };

  const handleFirstNameInput = (event) => {
    setUserFirstName(event.target.value);
    console.log("handle first name hit");
  };

  const handleLastNameInput = (event) => {
    setUserLastName(event.target.value);
    console.log("handle last name hit");
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

  // const handleLoginClick = () => {};

  async function handleLogin(req, res){
    try {
      const db = req.app.get("db");
      
      const [user1] = await db.user1.where('email=$1 OR username=$1', [req.body.username])
      if(!user1) return res.status(400).send('Please enter valid login credentials')
      
      const authenticated = await bcrypt.compare(req.body.password, user1.password_hash)
      if(!authenticated) return res.status(400).send('Please enter valid login credentials')
      
      delete user1.password
      if(authenticated) req.session.user = user1
      return res.send(user1)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }

  return (
    <div className="home-page">
      <h1 className="plot-your-book">PLOT YOUR BOOK</h1>
      <div className="login-form">
        <h1 className="login-text">SIGN IN</h1>
        <input className="input-box" type="text" placeholder=" Username..." />
        <input
          className="input-box"
          type="password"
          placeholder=" Password..."
        />
        <br></br>
        <button className="button-5" type="button">
          SIGN IN
        </button>
      </div>
      <br></br>
      <h1>OR</h1>
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
