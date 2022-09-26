import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./chapters.css";
import Form from "./ChapterForm";
import { Drawer } from "./drawer";

const Chapters = () => {
  const [data, setData] = useState([]);
  const [bookData, setBookData] = useState([...data]);
  const [bookIdShow, setBookIdShow] = useState(false);
  const [newChapNum, setNewChapNum] = useState([...data]);
  const [newChapTitle, setNewChapTitle] = useState([...data]);
  const [newChapDesc, setNewChapDesc] = useState([...data]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentlyChapterEditing, setCurrentlyChapterEditing] = useState(null);

  let { bookid } = useParams();

  //below is just so it can display the title and the description of the current book.
  useEffect(() => {
    axios.get(`/api/userbooks/${bookid}`).then((res) => setBookData(res.data));
    console.log(data);
  }, []);

  useEffect(() => {
    axios.get(`/api/chapters/${bookid}`).then((res) => setData(res.data));
    console.log(data);
    // console.log(chapters.chaptertitle)
  }, []);

  const handleChapterNumberInput = (event) => {
    setNewChapNum(event.target.value);
    // console.log("handle chapter num hit");
  };

  const handleChapterTitleInput = (event) => {
    setNewChapTitle(event.target.value);
    // console.log("handle chap titleis hit");
  };

  const handleChapterDescriptionInput = (event) => {
    setNewChapDesc(event.target.value);
    // console.log("handleDesc is hit");
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
    // console.log("axios post is hit");
  };

  const showChapterForm = (id) => {
    setShowDrawer(!showDrawer);
    setCurrentlyChapterEditing(id);
  };

  const handleChapterEditClick = (event) => {
    event.preventDefault();
    axios
      .put(`/api/editchapters/${currentlyChapterEditing}/${bookid}`, {
        chapternumber: newChapNum,
        chaptertitle: newChapTitle,
        chapterdescription: newChapDesc,
      })
      .then((res) => setData(res.data));
    setShowDrawer(false);
  };

  const handleChapterDeleteClick = (event) => {
    event.preventDefault();
    axios
      .delete(`/api/deletechapters/${currentlyChapterEditing}/${bookid}`)
      .then((res) => setData(res.data));
    setShowDrawer(false);
  };

  return (
    <div className="chapter-cards">
      <div className="chapters-background">
        <div className="chapter-info">
          {bookData.map((book, i) => (
            <div key={i}>
              <div>
                {" "}
                {bookIdShow ? <div>BOOK ID: {book.bookid} </div> : null}
              </div>
              <div className="the-book-title">{book.title}</div>
              <div className="the-chapter-title">
                DESCRIPTION: {book.description}
              </div>
            </div>
          ))}
        </div>
        <div className="all-chapters">
          <div className="chapter-card-2">
            {data.map((chapter, j) => (
              <div key={j}>
                <div className="chapter-words">
                  <button
                    className="chapter-edit-button"
                    onClick={() => showChapterForm(chapter.chapterid)}
                  >
                    EDIT
                  </button>
                  <div className="chapter-numbers">
                    CHAPTER {chapter.chapternumber}:
                  </div>
                  <div className="chapter-titles">{chapter.chaptertitle}</div>
                  <div className="chapter-summaries">
                    {chapter.chapterdescription}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="button-9" onClick={() => setShowDrawer(true)}>
          ADD CHAPTER
        </button>
        <Drawer open={showDrawer} setOpen={setShowDrawer}>
          <Form
            handleChapterNumberInput={handleChapterNumberInput}
            handleChapterTitleInput={handleChapterTitleInput}
            handleChapterDescriptionInput={handleChapterDescriptionInput}
            handleChapterClick={handleChapterClick}
            handleChapterEditClick={handleChapterEditClick}
            handleChapterDeleteClick={handleChapterDeleteClick}
          />
        </Drawer>
      </div>
    </div>
  );
};

export default Chapters;
