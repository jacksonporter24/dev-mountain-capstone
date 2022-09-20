import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import Book from "../pages/book";
import Profile from "../pages/profile";
import ErrorPage from "../pages/errorPage";
import Chapters from "../pages/chapters";

import "./app.css";

function App() {
  return (
    <Router>
      <div className="app">
      <nav className="nav-bar">
        <Link className="home-link" to="/">HOME</Link>
        <Link className="profile-link" to="/profile">PROFILE</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/chapters/:bookid" element={<Chapters />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

//keep nodemon running and open new terminal for another one
