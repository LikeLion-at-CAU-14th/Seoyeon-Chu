import React from "react";
import { Route, Routes } from "react-router-dom";

import BookList from "./pages/BookList";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

const App = () => {
  return (
    <main className="flex min-h-[95vh] w-full flex-col items-center justify-center gap-[30px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />

        <Route path="/books" element={<BookList />}>
          <Route path=":id" element={<BookDetail />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;