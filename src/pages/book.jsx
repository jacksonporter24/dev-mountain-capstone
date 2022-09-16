import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../form/form";
import "./book.css";

function Book() {
  const [data, setData] = useState([]);
  const [newBook, setNewBook] = useState([])

  const handleCreateBook = () => {
    axios
      .post("/api/books", {
        userId: "345",
        title: "New Book",
        description: "This is a description",
      })
      .then((response) => console.log(response.data));
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
            <div className="book-description">DESCRIPTION: {book.description}</div>
          </div>
        ))}
      </div>
    

    <div>
    </div>

    </div>
  );
}

export default Book;
