import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
