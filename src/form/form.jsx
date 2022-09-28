import "./form.css";

function Form({
  handleTitleInput,
  handleDescriptionInput,
  handleClick,
  handleEditClick,
  handleDeleteClick,
  bookToBeEdited,
}) {
  return (
    <div id="wrapper">
      <div className="book-form">
        <form>
          <div className="add-book-form">
            <div className="book-info-form">
              <label>Book Title: </label>
              <input
                className="book-input"
                type="text"
                id="title-input"
                name="title-input"
                value={bookToBeEdited.title}
                onChange={handleTitleInput}
              ></input>
              <br></br>
              <label>Description: </label>
              <input
                className="book-input"
                type="text"
                id="desc-input"
                name="desc-input"
                value={bookToBeEdited.description}
                onChange={handleDescriptionInput}
              ></input>

              <div className="button-2-div">
                {bookToBeEdited.bookid === undefined && (
                  <button
                    className="button-8"
                    type="button"
                    onClick={handleClick}
                  >
                    CREATE BOOK
                  </button>
                )}
              </div>
              <div className="button-2-div">
                {bookToBeEdited.bookid !== undefined && (
                  <button
                    className="button-8"
                    type="button"
                    onClick={handleEditClick}
                  >
                    EDIT BOOK
                  </button>
                )}
              </div>
              <div className="button-2-div">
                {bookToBeEdited.bookid !== undefined && (
                  <button
                    className="button-8"
                    type="button"
                    onClick={handleDeleteClick}
                  >
                    DELETE BOOK
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
