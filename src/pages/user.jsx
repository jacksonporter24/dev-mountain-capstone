import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import ProfileForm from "../pages/ProfileForm";

function User() {
  const [data, setData] = useState([]);
  const [usernameReg, setUsernameReg] = useState([...data]);
  const [passwordReg, setPasswordReg] = useState([...data]);
  const [userFirstName, setUserFirstName] = useState([...data]);
  const [userLastName, setUserLastName] = useState([...data]);

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
        console.log(response);
      });
  };

  return (
    <div>
      <div>
        {data.map((user, i) => (
          <div key={i}>
            <div className>
              <div className>
                <div className>{user.firstname}</div>
                <div className></div>
                DESCRIPTION: <br></br>
                <br></br>
                <div className>{user.lastname}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProfileForm
        handleUsernameInput={handleUsernameInput}
        handlePasswordInput={handlePasswordInput}
        handleFirstNameInput={handleFirstNameInput}
        handleLastNameInput={handleLastNameInput}
        handleRegisterClick={handleRegisterClick}
      />
      <button onClick={handleRegisterClick}>ADD USER</button>
    </div>
  );
}

export default User;
