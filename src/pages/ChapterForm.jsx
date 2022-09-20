import { useState } from "react";

function Form({
  handleChapterNumberInput,
  handleChapterTitleInput,
  handleChapterDescriptionInput,
  handleChapterClick,
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

          <button onClick={handleChapterClick}>Click</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
