import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "../Content/Content";
import FriendsContainer from "../Friends/FriendsContainer";
import HeaderContaner from "../Header/HeaderContainer";
import Navbar from "../Navbar/Navbar";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContaner />
        <Navbar />
        <Content />
        <FriendsContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
