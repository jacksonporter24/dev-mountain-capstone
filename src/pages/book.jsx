import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../form/form";
import newBookStub from "../utilities";
import "./book.css";

function Book() {
  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState([...data]);
  const [newDescription, setNewDescription] = useState([...data]);
  const [show, setShow] = useState(false);
  const [newBook, setNewBook] = useState();

  const handleTitleInput = (event) => {
    setNewTitle(event.target.value);
    // setShow(!show);
    console.log("handletitle is hit");
  };

  const handleDescriptionInput = (event) => {
    setNewDescription(event.target.value);
    // setShow(!show);
    console.log("handleDesc is hit");
  };

  // const handleClose = () => {
  //   setData(newBookStub);
  //   setShow(false);
  // };

  const showForm = () => {
    setShow(!show);

    setNewBook(newBookStub(data));
    console.log("showForm is hit");
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post("/api/books", {
        userId: "345",
        title: newTitle,
        description: newDescription,
      })
      .then((res) => setData(res.data));
    console.log("axios post is hit");
    setShow(false);
  };

  useEffect(() => {
    axios.get("/api/books").then((res) => setData(res.data));
    console.log(data);
  }, []);

  return (
    <div>
      <div>
        {data.map((book, i) => (
          <div key={i}>
            <div className="book-title">TITLE: {book.title}</div>
            <div className="book-description">
              DESCRIPTION: {book.description}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          {show ? (
            <div>
              <Form
                handleTitleInput={handleTitleInput}
                handleDescriptionInput={handleDescriptionInput}
                handleClick={handleClick}
              />
            </div>
          ) : null}
        </div>
        <button className="new-button" onClick={showForm}>
          New
        </button>
      </div>
    </div>
  );
}

export default Book;
