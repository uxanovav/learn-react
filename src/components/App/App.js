import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "../Content/Content";
import Friends from "../Friends/Friends";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Content />
        <Friends />
      </div>
    </BrowserRouter>
  );
};

export default App;
