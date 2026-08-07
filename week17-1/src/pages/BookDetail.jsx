import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();

  const [books, setBooks] = useState([]);
  const [likes, setLikes] = useState(0);

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

  useEffect(() => {
    setLikes(0);
  }, [id]);

  const book = books.find((item) => item.id === Number(id));

  const updateLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  if (!book) {
    return <div className="text-xl text-[#535353]">찾는 책이 없습니다</div>;
  }

  return (
    <article className="flex max-w-[500px] flex-col items-center gap-4 text-center">
      <h1 className="text-[32px] font-bold text-[#535353]">
        {book.title}
      </h1>

      <h3 className="text-xl font-bold text-[#4a4a4a]">
        {book.author}
      </h3>

      <p className="leading-7 text-[#535353]">
        {book.description}
      </p>

      <button
        type="button"
        onClick={updateLikes}
        className="
          flex cursor-pointer items-center justify-center
          rounded-[25px] bg-[#75b5f5]
          px-[15px] py-[5px] text-base text-white
          transition-colors duration-300
          hover:bg-[#9ecfff] active:bg-[#3d9dfd]
        "
      >
        <span className="mr-2 text-xl">👍</span>
        {likes}
      </button>
    </article>
  );
};

export default BookDetail;