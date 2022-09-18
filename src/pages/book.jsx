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

  const handleTitleInput = (event) => {
    setNewTitle(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    setNewDescription(event.target.value);
  };

  const handleClose = () => {
    setData(newBookStub);
    setShow(false);
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
  };

  const showForm = () => {
    setShow(!show);
    setData(newBookStub(data));
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
      <Form
        handleTitleInput={handleTitleInput}
        handleDescriptionInput={handleDescriptionInput}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Book;
