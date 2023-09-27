import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter Text To Analyze Below:"/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
