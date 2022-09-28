import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./chapters.css";
import Form from "./ChapterForm";
import { Drawer } from "./drawer";
import cx from "classnames";

const Chapters = () => {
  const [data, setData] = useState([]);
  const [bookData, setBookData] = useState([...data]);
  const [bookIdShow, setBookIdShow] = useState(false);
  const [newChapNum, setNewChapNum] = useState([...data]);
  const [newChapTitle, setNewChapTitle] = useState([...data]);
  const [newChapDesc, setNewChapDesc] = useState([...data]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentlyChapterEditing, setCurrentlyChapterEditing] = useState(null);
  const [chapterToBeEdited, setChapterToBeEdited] = useState({});

  let { bookid, userid } = useParams();
  const navigate = useNavigate();

  //below is just so it can display the title and the description of the current book.
  useEffect(() => {
    axios.get(`/api/userbooks/${bookid}`).then((res) => setBookData(res.data));
  }, []);

  useEffect(() => {
    axios.get(`/api/chapters/${bookid}`).then((res) => setData(res.data));
  }, []);

  const handleChapterNumberInput = (event) => {
    setChapterToBeEdited({
      ...chapterToBeEdited,
      chapternumber: event.target.value,
    });
    setNewChapNum(event.target.value);
  };

  const handleChapterTitleInput = (event) => {
    setChapterToBeEdited({
      ...chapterToBeEdited,
      chaptertitle: event.target.value,
    });
    setNewChapTitle(event.target.value);
  };

  const handleChapterDescriptionInput = (event) => {
    setChapterToBeEdited({
      ...chapterToBeEdited,
      chapterdescription: event.target.value,
    });
    setNewChapDesc(event.target.value);
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
    setShowDrawer(false);
  };

  const showChapterForm = (chapter) => {
    setShowDrawer(!showDrawer);
    setChapterToBeEdited(chapter);
  };

  const handleChapterEditClick = (event) => {
    event.preventDefault();
    axios
      .put(
        `/api/editchapters/${chapterToBeEdited.chapterid}/${bookid}`,
        chapterToBeEdited
      )
      .then((res) => setData(res.data))
      .finally(() => {
        setChapterToBeEdited({});
      });
    setShowDrawer(false);
  };

  const handleChapterDeleteClick = (event) => {
    event.preventDefault();
    axios
      .delete(`/api/deletechapters/${chapterToBeEdited.chapterid}/${bookid}`)
      .then((res) => setData(res.data))
      .finally(() => {
        setChapterToBeEdited({});
      });
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
                  <div className="chapter-numbers">
                    CHAPTER {chapter.chapternumber}:
                  </div>
                  <div className="chapter-titles">{chapter.chaptertitle}</div>
                  <div className="chapter-summaries">
                    {chapter.chapterdescription}
                  </div>
                  <button
                    className="chapter-edit-button"
                    onClick={() => showChapterForm(chapter)}
                  >
                    EDIT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="div-button">
          <button className="button-9" onClick={() => setShowDrawer(true)}>
            ADD CHAPTER
          </button>
        </div>
        <div>
          <button className="back-button" onClick={() => navigate(-1)}>
            BACK
          </button>
        </div>
        <Drawer
          open={showDrawer}
          setOpen={(open) => {
            setShowDrawer(open);
            setChapterToBeEdited({});
          }}
        >
          <Form
            handleChapterNumberInput={handleChapterNumberInput}
            handleChapterTitleInput={handleChapterTitleInput}
            handleChapterDescriptionInput={handleChapterDescriptionInput}
            handleChapterClick={handleChapterClick}
            handleChapterEditClick={handleChapterEditClick}
            handleChapterDeleteClick={handleChapterDeleteClick}
            chapterToBeEdited={chapterToBeEdited}
          />
        </Drawer>
      </div>
    </div>
  );
};

export default Chapters;
