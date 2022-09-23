import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../form/form";
import newBookStub from "../utilities";
import "./book.css";
import { useNavigate, useParams } from "react-router-dom";
import { Drawer } from "./drawer";

function Book() {
  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState([...data]);
  const [newDescription, setNewDescription] = useState([...data]);
  const [show, setShow] = useState(false);
  const [newBook, setNewBook] = useState();
  const navigate = useNavigate();
  const [bookIdShow, setBookIdShow] = useState(false);

  useEffect(() => {
    console.log('useEffect', userid)
    axios.get(`/api/userbooks/${userid}`).then((res) => setData(res.data));
    console.log(data);
  }, []);

  let { userid } = useParams();

  const handleTitleInput = (event) => {
    setNewTitle(event.target.value);
    console.log("handletitle is hit");
  };

  const handleDescriptionInput = (event) => {
    setNewDescription(event.target.value);
    console.log("handleDesc is hit");
  };

  const showForm = () => {
    setShow(!show);
    setNewBook(newBookStub(data));
    console.log("showForm is hit");
  };

  const handleChapterClick = (event) => {
    console.log("chapterClick has been hit");
    navigate("./chapters");
  };

  const handleClick = (event) => {
    console.log('I am in handleClick')
    event.preventDefault();
    axios
      .post(`/api/books`, {
        title: newTitle,
        description: newDescription,
        userid
      })
      .then((res) => setData(res.data));
    console.log("axios post is hit");
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
            <div
              className="book-title"
              onClick={() => {
                navigate(`/chapters/${book.bookid}`);
              }}
            >
              <div className="title-desc">
                <div className="book-titles">{book.title}</div><br></br>
                <div className="description">DESCRIPTION:</div> <br></br>
                <br></br>
                <div className="description-font">{book.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Drawer open={show} setOpen={setShow}>
        <Form
          handleTitleInput={handleTitleInput}
          handleDescriptionInput={handleDescriptionInput}
          handleClick={handleClick}
        />
      </Drawer>
    </div>
  );
}

export default Book;
