import React from "react";
import Book from "./book";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const Chapters = () => {
const [data, setData] = useState([])


  let { bookid, title, description } = useParams();
  console.log(`data`)

  useEffect(() => {
    axios.get(`/api/books/${bookid}`).then((res) => setData(res.data));
    console.log(data);
  }, []);

  return (
    <div>
    <div>
        {data.map((book, i) => (
          <div key={i}>
            <div>BOOK ID: {book.bookid} </div>
            <div className="book-title">
              
              TITLE: {book.title}

            </div>
            <div className="book-description">
              DESCRIPTION: {book.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapters;
