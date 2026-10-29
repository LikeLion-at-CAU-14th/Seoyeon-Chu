import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/databases/books.json");
        setBooks(response.data);
      } catch (error) {
        console.error("도서 목록 불러오기 실패:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="m-5 flex h-[80vh] w-full items-center justify-start gap-5">
      <section
        className="
          flex h-4/5 flex-col justify-start
          rounded-r-[10px] bg-white p-[50px]
          shadow-[2px_2px_5px_rgba(0,0,0,0.1)]
        "
      >
        <button
          type="button"
          onClick={goHome}
          className="
            cursor-pointer text-left text-[40px]
            font-bold text-[#535353]
            transition-colors hover:text-[#75b5f5]
          "
        >
          Book List
        </button>

        <ul className="mt-5 flex list-none flex-col gap-3 p-0">
          {books.map((book) => (
            <li key={book.id}>
              <Link
                to={`/books/${book.id}`}
                className="
                  text-lg text-[#535353] no-underline
                  transition-colors hover:text-[#75b5f5]
                "
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-[100px] flex h-full flex-col items-center justify-start p-[50px]">
        <Outlet />
      </section>
    </div>
  );
};

export default BookList;