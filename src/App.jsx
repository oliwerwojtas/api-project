import React from "react";
import GlobalStyles from "./components/GlobalStyle";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/game/:id" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
