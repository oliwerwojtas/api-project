import React from "react";
import GlobalStyles from "./components/GlobalStyle";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/game/:id" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
