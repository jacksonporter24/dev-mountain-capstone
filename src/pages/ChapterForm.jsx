import { useState } from "react";

function Form({
  handleChapterNumberInput,
  handleChapterTitleInput,
  handleChapterDescriptionInput,
  handleChapterClick,
  handleChapterEditClick,
  handleChapterDeleteClick,
  chapterToBeEdited,
}) {
  return (
    <div id="wrapper">
      <div className="chapter-form">
        <form>
          <div className="chapter-info-form">
            <label>Chapter Number: </label>
            <input
              className="chapter-input"
              type="number"
              id="title-input"
              name="title-input"
              value={chapterToBeEdited.chapternumber}
              onChange={handleChapterNumberInput}
            ></input>
            <label>Chapter Title: </label>
            <input
              className="chapter-input"
              type="text"
              id="title-input"
              name="title-input"
              value={chapterToBeEdited.chaptertitle}
              onChange={handleChapterTitleInput}
            ></input>
            <label>Chapter Description: </label>
            <input
              className="chapter-input"
              type="text"
              id="desc-input"
              name="desc-input"
              onChange={handleChapterDescriptionInput}
              value={chapterToBeEdited.chapterdescription}
            ></input>
            <div className="div-button">
              {chapterToBeEdited.chapterid === undefined && (
                <button className="button-9" onClick={handleChapterClick}>
                  CREATE CHAPTER
                </button>
              )}
            </div>
            <div className="div-button">
              {chapterToBeEdited.chapterid !== undefined && (
                <button className="button-9" onClick={handleChapterEditClick}>
                  EDIT CHAPTER
                </button>
              )}
            </div>
            <div className="div-button">
              {chapterToBeEdited.chapterid !== undefined && (
                <button className="button-9" onClick={handleChapterDeleteClick}>
                  DELETE CHAPTER
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
