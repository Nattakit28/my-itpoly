import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Courses from "./components/Courses";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Courses />
      <Careers />
      <Contact />
    </div>
  );
}

export default App;
