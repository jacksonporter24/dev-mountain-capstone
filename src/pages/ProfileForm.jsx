import React from "react";

function ProfileForm({
  handleUsernameInput,
  handlePasswordInput,
  handleFirstNameInput,
  handleLastNameInput,
  handleRegisterClick,
}) {
  return (
    <div>
      <div>
        <form>
          <div>
            <h1>REGISTRATION</h1>
            <label>Username</label>
            <input
              type="text"
              onChange={handleUsernameInput}
            />
            <label>Password</label>
            <input
              type="text"
              onChange={handlePasswordInput}
            />
            <label>First Name</label>
            <input
              type="text"
              onChange={handleFirstNameInput}
            />
            <label>Last Name</label>
            <input
              type="text"
              onChange={handleLastNameInput}
            />
            <button type="button" onClick={handleRegisterClick}>REGISTER</button>
          </div>
          <div>
            <h1>LOGIN</h1>
            <input type="text" placeholder="Username..." />
            <input type="password" placeholder="Password..." />
            <input type="firstname" placeholder="First Name..." />
            <input type="lastname" placeholder="Last Name..." />
            <button type="button" >LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProfileForm;
