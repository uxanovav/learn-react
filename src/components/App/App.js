import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "../Content/Content";
import Friends from "../Friends/Friends";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./App.css";

const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Content state={props.state} dispatch={props.dispatch} />
        <Friends state={props.state}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
