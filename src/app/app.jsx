import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import Book from "../pages/book";
import UserID from "../pages/userID"
import ErrorPage from "../pages/errorPage";
import Chapters from "../pages/chapters";
import User from "../pages/user"

import "./app.css";

function App() {
  return (
    <Router>
      <div className="app">
      <nav className="nav-bar">
        <Link className="home-link" to="/">HOME</Link>
        <Link className="profile-link" to="/user">PROFILE</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/chapters/:bookid" element={<Chapters />} />
        <Route path="/user" element={<User />} />
        {/* <Route path="/user/:userid" element={<UserID />} /> */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
