import React from "react";
import Home from "./Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Experience from "./views/Experience";
import {Routes,BrowserRouter,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} /> 
        <Route path="/experience" element = {<Experience />} />
        <Route path="/contact" element = {<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
