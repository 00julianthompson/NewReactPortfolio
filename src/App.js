import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./Nav/Navbar";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import  Home  from "./Pages/Home";
import LayoutPage from "./Pages/LayoutPage";
import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LayoutPage/>}>
          <Route index element={<Home />}/>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
