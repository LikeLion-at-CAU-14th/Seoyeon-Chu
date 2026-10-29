import { useState } from "react";
import "./App.css";

import Home from "./component/Home";
import Photo from "./component/Photo";
import About from "./component/About";
import Header from "./component/Header";
import TagCard from "./component/TagCard";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home setPage={setPage} />}
      {page === "photo" && <Photo setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
    </>
  );
}

export default App;