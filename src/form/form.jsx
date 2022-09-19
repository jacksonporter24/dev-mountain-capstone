import { useState } from "react";
import "./form.css";

function Form({
  handleTitleInput,
  handleDescriptionInput,
  handleClick,
  newBook,
  setNewbook,
}) {
  return (
    <div id="wrapper">
      <div className="card-red">
        <form>
          <p>INPUT TITLE:</p>
          <input
            type="text"
            id="title-input"
            name="title-input"
            onChange={handleTitleInput}
          ></input>

          <p>INPUT DESCRIPTION</p>
          <input
            type="text"
            id="desc-input"
            name="desc-input"
            onChange={handleDescriptionInput}
          ></input>

          <button onClick={handleClick}>Click</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
