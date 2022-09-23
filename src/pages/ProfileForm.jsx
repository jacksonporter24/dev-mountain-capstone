import React from "react";
import "./ProfileForm.css";

function ProfileForm({
  handleUsernameInput,
  handlePasswordInput,
  handleFirstNameInput,
  handleLastNameInput,
  handleRegisterClick,
  handleLoginClick,
}) {
  return (
    <div class="wrapper">
      <div className="user-info">
        <form>
          <div className="registration-form">
            <h1>REGISTRATION</h1>
            <label>Username: </label>
            <input
              className="registration-input"
              type="text"
              onChange={handleUsernameInput}
            />
            <br></br>
            <label>Password: </label>
            <input
              className="registration-input"
              type="text"
              onChange={handlePasswordInput}
            />
            <br></br>
            <label>First Name: </label>
            <input
              className="registration-input"
              type="text"
              onChange={handleFirstNameInput}
            />
            <br></br>
            <label>Last Name: </label>
            <input
              className="registration-input"
              type="text"
              onChange={handleLastNameInput}
            />

            <br></br>
            <button
              className="button-7"
              type="button"
              onClick={handleRegisterClick}
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProfileForm;
