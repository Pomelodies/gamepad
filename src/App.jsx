import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Game from "./pages/Game/Game";
import Footer from "./components/Footer/Footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home search={search} setSearch={setSearch} />}
          />
          <Route path="/games/:id" element={<Game />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
