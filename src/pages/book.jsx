import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../form/form";
import newBookStub from "../utilities";
import "./book.css";
import { useNavigate, useParams } from "react-router-dom";
import { Drawer } from "./drawer";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Book() {
  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState([...data]);
  const [newDescription, setNewDescription] = useState([...data]);
  const [show, setShow] = useState(false);
  const [newBook, setNewBook] = useState();
  const navigate = useNavigate();
  const [bookIdShow, setBookIdShow] = useState(false);
  const [currentlyEditing, setCurrentlyEditing] = useState(null);
  const [bookToBeEdited, setBookToBeEdited] = useState({});

  useEffect(() => {
    axios.get(`/api/userbooks/${userid}`).then((res) => setData(res.data));
  }, []);

  let { userid } = useParams();

  const handleTitleInput = (event) => {
    setBookToBeEdited({
      ...bookToBeEdited,
      title: event.target.value
    })
    setNewTitle(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    setBookToBeEdited({
      ...bookToBeEdited,
      description: event.target.value
    })
    setNewDescription(event.target.value);
  };

  const showForm = (id) => {
    setShow(!show);
    setCurrentlyEditing(id);
    setNewBook(newBookStub(data));
  };

  const handleChapterClick = (event) => {
    navigate("./chapters");
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post(`/api/books`, {
        title: newTitle,
        description: newDescription,
        userid,
      })
      .then((res) => setData(res.data));
    setShow(false);
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    axios
      .put(`/api/editbooks/${currentlyEditing}/${userid}`, {
        title: newTitle,
        description: newDescription,
      })
      .then((res) => setData(res.data));
    setShow(false);
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    axios
      .delete(`/api/deletebooks/${currentlyEditing}/${userid}`)
      .then((res) => setData(res.data));
    setShow(false);
  };

  return (
    <div className="books-background">
      <div className="book-info">
        <br></br>
        <button className="button-5" onClick={showForm}>
          ADD A BOOK
        </button>
        <br></br>
      </div>
      <div className="all-books">
        {data.map((book, i) => (
          <div key={i}>
            <div> {bookIdShow ? <div>BOOK ID: {book.bookid} </div> : null}</div>
            <div className="book-title">
              <div className="title-desc">
                <div className="pen-icon" onClick={() => showForm(book.bookid)}>
                  <FontAwesomeIcon icon={faPen} />
                </div>
                <div className="book-titles">{book.title}</div>
                <br></br>
                <div className="description">DESCRIPTION:</div> <br></br>
                <br></br>
                <div className="description-font">{book.description}</div>
                <div>
                  <div
                    className="book-icon"
                    onClick={() => navigate(`/chapters/${book.bookid}`)}
                  >
                    <FontAwesomeIcon icon={faBookOpen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          className="back-button"
          onClick={() => {
            navigate(`/user/${userid}`);
          }}
        >
          BACK
        </button>
      </div>

      <Drawer open={show} setOpen={setShow}>
        <Form
          handleTitleInput={handleTitleInput}
          handleDescriptionInput={handleDescriptionInput}
          handleClick={handleClick}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      </Drawer>
    </div>
  );
}

export default Book;
