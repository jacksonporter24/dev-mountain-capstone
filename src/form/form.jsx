import { useState } from "react";
import "./form.css";

function Form({ handleTitleInput, handleDescriptionInput, handleClick }) {
  return (
    <div id="wrapper">
      <div className="book-form">
        <form>
          <div className="add-book-form">
            <h1>ADD BOOK</h1>
            <div className="book-info-form">
              <label>Book Title: </label>
              <input
                className="book-input"
                type="text"
                id="title-input"
                name="title-input"
                onChange={handleTitleInput}
              ></input>
                <br></br>
              <label>Description: </label>
              <input
                className="book-input"
                type="text"
                id="desc-input"
                name="desc-input"
                onChange={handleDescriptionInput}
              ></input>

              <button className="button-8" type="button" onClick={handleClick}>
                ADD BOOK
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
