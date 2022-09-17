import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../form/form";
import "./book.css";

function Book() {
  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState([...data]);
  const [newDescription, setNewDescription] = useState([...data]);

  const handleTitleInput = (event) => {
    setNewTitle(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    setNewDescription(event.target.value);
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

        <div>
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
            // value={newDescription} //this would be required without useState
          ></input>
          <button onClick={handleClick}>Click</button>
        </div>
      </div>
    </div>
  );
}

export default Book;
