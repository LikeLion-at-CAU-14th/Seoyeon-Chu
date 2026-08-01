import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="m-5 flex w-full flex-col items-center justify-center gap-5">
      <h1 className="text-[40px] font-bold text-[#535353]">
        🦁 멋사 17주차 2번째 과제 🦁
      </h1>

      <Link
        to="/quiz"
        className="
          flex h-[100px] w-[300px] cursor-pointer
          items-center justify-center rounded-[20px]
          bg-white text-[25px] font-bold text-[#4a4a4a]
          no-underline shadow-[2px_2px_5px_rgba(0,0,0,0.1)]
          transition-colors duration-200
          hover:bg-[#75b5f5] hover:text-white
        "
      >
        👉 퀴즈 풀러 가기 👈
      </Link>
    </div>
  );
};

export default Home;