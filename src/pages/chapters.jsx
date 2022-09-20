import React from "react";
import Book from "./book";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./chapters.css";

const Chapters = () => {
  const [data, setData] = useState([]);
  const [chapterData, setChapterData] = useState([]);
  const [bookIdShow, setBookIdShow] = useState(false);

  let { bookid, title, description } = useParams();
  console.log(`data`);

  useEffect(() => {
    axios.get(`/api/books/${bookid}`).then((res) => setData(res.data));
    console.log(data);
  }, []);

  useEffect(() => {
    axios.get("/api/chapters").then((res) => setData(res.data));
    console.log(data);
    // console.log(chapters.chaptertitle)
  }, []);

  return (
    <div>
      <div>
        {data.map((book, i) => (
          <div key={i}>
            <div> {bookIdShow ? <div>BOOK ID: {book.bookid} </div> : null}</div>
            <div>TITLE: {book.title}</div>
            <div>DESCRIPTION: {book.description}</div>
          </div>
        ))}
      </div>
      <div>
        {data.map((chapter, j) => (
          <div key={j}>
            <div>chapter title: {chapter.chaptertitle}</div>
            <div>description: {chapter.chapterdescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapters;

