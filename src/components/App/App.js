import React from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className = "app-wrapper">
      <Header/>
      <Navbar/>
      <Content/>
    </div>
  );
};

export default App;
