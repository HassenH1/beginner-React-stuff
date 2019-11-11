import React from 'react';
import './App.css';
import Nav from "./Components/Nav/nav.js"
import Header from "./Components/Header/header.js"
import About from "./Components/About/about.js"

function App() {
  return (
    <div className="App" style={{"height": "100vh%", "backgroundColor": "#add8e6"}}>
      <Nav />
      <Header />
      <About />
    </div>
  );
}

export default App;
