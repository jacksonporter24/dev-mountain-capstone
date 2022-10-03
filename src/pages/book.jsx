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
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
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

  let { bookid, userid } = useParams();

  useEffect(() => {
    axios.get(`/api/userbooks/${userid}`).then((res) => setData(res.data));
  }, []);

  const handleTitleInput = (event) => {
    setBookToBeEdited({
      ...bookToBeEdited,
      title: event.target.value,
    });
    setNewTitle(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    setBookToBeEdited({
      ...bookToBeEdited,
      description: event.target.value,
    });
    setNewDescription(event.target.value);
  };

  const showForm = (book) => {
    setShow(!show);
    setBookToBeEdited(book);
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
    console.log(bookToBeEdited.bookid);
    axios
      .put(`/api/editbooks/${bookToBeEdited.bookid}/${userid}`, bookToBeEdited)
      .then((res) => setData(res.data))
      .finally(() => {
        setBookToBeEdited({});
      });
    setShow(false);
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    axios
      .delete(`/api/deletebooks/${bookToBeEdited.bookid}/${userid}`)
      .then((res) => setData(res.data))
      .finally(() => {
        setBookToBeEdited({});
      });
    setShow(false);
  };

  return (
    <div className="books-background">
      <div className="book-info">
        {/* <br></br> */}
        <div className="book-nav">
          <button
            className="back-button"
            onClick={() => {
              navigate(`/user/${userid}`);
            }}
          >
            BACK
          </button>
          <button className="button-5" onClick={() => setShow(true)}>
          ADD A BOOK
          <FontAwesomeIcon className="plus-s``ymbol" icon={faSquarePlus} size="lg"/>
          </button>
        </div>
        <br></br>
      </div>
      <div className="all-books">
        {data.map((book, i) => (
          <div key={i}>
            <div> {bookIdShow ? <div>BOOK ID: {book.bookid} </div> : null}</div>
            <div className="book-title">
              <div className="title-desc">
                <div className="pen-icon" onClick={() => showForm(book)}>
                  <FontAwesomeIcon icon={faPen} size="2x" />
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
                    <FontAwesomeIcon icon={faBookOpen} size="2x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Drawer
        open={show}
        setOpen={(open) => {
          setShow(open);
          setBookToBeEdited({});
        }}
      >
        <Form
          handleTitleInput={handleTitleInput}
          handleDescriptionInput={handleDescriptionInput}
          handleClick={handleClick}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          bookToBeEdited={bookToBeEdited}
        />
      </Drawer>
    </div>
  );
}

export default Book;
