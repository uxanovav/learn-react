import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "../Content/Content";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;
