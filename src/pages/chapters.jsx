import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./chapters.css";
import Form from "./ChapterForm";
import { Drawer } from "./drawer";

const Chapters = () => {
  const [data, setData] = useState([]);
  const [bookData, setBookData] = useState([]);
  const [bookIdShow, setBookIdShow] = useState(false);
  const [newChapNum, setNewChapNum] = useState([...data]);
  const [newChapTitle, setNewChapTitle] = useState([...data]);
  const [newChapDesc, setNewChapDesc] = useState([...data]);
  const [showDrawer, setShowDrawer] = useState(false);

  let { bookid } = useParams();

  const handleChapterNumberInput = (event) => {
    setNewChapNum(event.target.value);
    console.log("handle chapter num hit");
  };

  const handleChapterTitleInput = (event) => {
    setNewChapTitle(event.target.value);
    console.log("handle chap titleis hit");
  };

  const handleChapterDescriptionInput = (event) => {
    setNewChapDesc(event.target.value);
    console.log("handleDesc is hit");
  };

  const handleChapterClick = (event) => {
    event.preventDefault();
    axios
      .post("/api/chapters", {
        chapternumber: newChapNum,
        chaptertitle: newChapTitle,
        chapterdescription: newChapDesc,
        bookid,
      })
      .then((res) => setData(res.data));
    console.log("axios post is hit");
  };

  useEffect(() => {
    axios.get(`/api/books/${bookid}`).then((res) => setBookData(res.data));
    console.log(data);
  }, []);

  useEffect(() => {
    axios.get(`/api/chapters/${bookid}`).then((res) => setData(res.data));
    console.log(data);
    // console.log(chapters.chaptertitle)
  }, []);

  return (
    <div className="chapters-background">
      <div className="book-info">
        {bookData.map((book, i) => (
          <div key={i}>
            <div> {bookIdShow ? <div>BOOK ID: {book.bookid} </div> : null}</div>
            <div>{book.title}</div>
            <div>DESCRIPTION: {book.description}</div>
          </div>
        ))}
      </div>
      <div className="all-chapters">
        <div>
          {data.map((chapter, j) => (
            <div key={j}>
              <div className="chapter-numbers">
                Chapter {chapter.chapternumber}
              </div>
              <div className="chapter-titles">{chapter.chaptertitle}</div>
              <div className="chapter-summaries">
                Summary: {chapter.chapterdescription}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => setShowDrawer(true)}>New Chapter</button>
      <Drawer open={showDrawer} setOpen={setShowDrawer}>
        <Form
          handleChapterNumberInput={handleChapterNumberInput}
          handleChapterTitleInput={handleChapterTitleInput}
          handleChapterDescriptionInput={handleChapterDescriptionInput}
          handleChapterClick={handleChapterClick}
        />
        <button onClick={handleChapterClick}>ADD CHAPTER</button>
      </Drawer>
    </div>
  );
};

export default Chapters;
