import { useState } from "react";

function Form({
  handleChapterNumberInput,
  handleChapterTitleInput,
  handleChapterDescriptionInput,
  handleChapterClick,
  handleChapterEditClick,
  handleChapterDeleteClick,
}) {
  return (
    <div id="wrapper">
      <div className="card-red">
        <form>
          <p>INPUT CHAPTER NUMBER</p>
          <input
            type="number"
            id="title-input"
            name="title-input"
            onChange={handleChapterNumberInput}
          ></input>
          <p>INPUT TITLE:</p>
          <input
            type="text"
            id="title-input"
            name="title-input"
            onChange={handleChapterTitleInput}
          ></input>

          <p>INPUT DESCRIPTION</p>
          <input
            type="text"
            id="desc-input"
            name="desc-input"
            onChange={handleChapterDescriptionInput}
          ></input>

          <button className="button-9" onClick={handleChapterClick}>
            CREATE CHAPTER
          </button>
          <button className="button-9" onClick={handleChapterEditClick}>
            EDIT CHAPTER
          </button>
          <button className="button-9" onClick={handleChapterDeleteClick}>
            DELETE CHAPTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
