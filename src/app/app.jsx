import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import Book from "../pages/book";
import Profile from "../pages/profile";
import ErrorPage from "../pages/errorPage";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const handleCreateBook = () => {
    axios
      .post("/api/books", {
        userId: "345",
        title: "New Book",
        description: "This is a description",
      })
      .then((response) => console.log(response.data));//new get and line 25
  };

  useEffect(() => {
    handleCreateBook();
    axios.get("/api/books").then((res) => console.log(res.data));
    console.log(data);
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <p>{data}</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

//keep nodemon running and open new terminal for another one
