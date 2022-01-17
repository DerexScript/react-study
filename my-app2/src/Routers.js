import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Personagem from './Personagem';

export default function Routers() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route path="/personagem/:id" element={<Personagem />}></Route>
        </Routes>
      </BrowserRouter>
  );
}
