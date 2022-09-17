import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../form/form";
import "./book.css";

function Book() {
  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState([...data]);
  const [newDescription, setNewDescription] = useState([...data]);

  // const addUser = (e) => {
  //   e.preventDefault();
  //   setUsers([...users, newUser]);
  //   setShow(!show);
  // };

  // const handleCreateBook = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/api/books")
  //     .then((res) => setNewBook([...newBook, res.setNewBook]));
  // };

  // const handleCreateBook = (description) => {
  //   axios
  //     .post("/api/books", {
  //       userId: "345",
  //       title: "This is a post title",
  //       description: { description },
  //     })
  //     .then((response) => console.log(response.data)); //new get and line 25
  // };

  const handleTitleInput = (event) => {
    setNewTitle(event.target.value);

    // console.log("value is:", event.target.value);
  };

  const handleDescriptionInput = (event) => {
    setNewDescription(event.target.value);
    // console.log('value description is', event.target.value)
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post("/api/books", {
        userId: "345",
        title: newTitle,
        description: newDescription,
      })
      .then((response) => console.log(response.data));
    axios.get("/api/books").then((res) => setData(res.data));

    // console.log("final click", newTitle, newDescription);
  };

  useEffect(() => {
    axios.get("/api/books").then((res) => setData(res.data));
    console.log(data);
  }, []);

  // useEffect(() => {
  //   axios.post("/api/books").then((res) => )
  // })

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
            value={newTitle}
          ></input>
          <p>INPUT DESCRIPTION</p>
          <input
            type="text"
            id="desc-input"
            name="desc-input"
            onChange={handleDescriptionInput}
            value={newDescription}
          ></input>
          <button onClick={handleClick}>Click</button>

          {/* <button onClick={handleCreateBook}>SUBMIT TITLE</button>
          <p>INPUT DESCRIPTION:</p>
          <input onChange={handleCreateBook}></input>
          <button>SUBMIT DESCRIPTION</button> */}
        </div>
      </div>
      {/* // <input
  //         value={newUser.name.first}
  //         name="first"
  //         onChange={(e) => {
  //           setNewUser({
  //             ...newUser,
  //             name: { ...newUser.name, first: e.target.value },
  //           });
  //         }} */}

      <div></div>
    </div>
  );
}

export default Book;
