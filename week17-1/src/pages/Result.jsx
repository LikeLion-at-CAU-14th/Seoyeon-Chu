import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const BASE_URL = "https://week12-api-rcwo.onrender.com";

const linkStyle = `
  m-0 flex h-[60px] w-[250px]
  items-center justify-center rounded-[20px]
  bg-[#eeeeee] text-xl font-bold text-[#4a4a4a]
  no-underline transition-colors duration-200
  hover:bg-[#75b5f5] hover:text-white
`;

const Result = () => {
  const [searchParams] = useSearchParams();
  const score = searchParams.get("score");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/result?score=${score}`
        );

        setMessage(response.data.message);
      } catch (error) {
        console.error("결과 불러오기 실패😭:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [score]);

  if (loading) {
    return (
      <div className="text-xl text-[#4a4a4a]">
        결과를 불러오는 중입니다...
      </div>
    );
  }

  return (
    <div
      className="
        m-0 flex flex-col items-center justify-center gap-[25px]
        rounded-[20px] bg-white p-[60px]
        shadow-[2px_2px_5px_rgba(0,0,0,0.1)]
      "
    >
      <h1 className="m-0 text-[40px] font-bold text-[#535353]">
        결과 보기
      </h1>

      <div className="m-0 text-[30px] font-bold text-[#333333]">
        내 점수: {score} / 5
      </div>

      <div className="m-0 text-[25px] text-[#4a4a4a]">
        {message}
      </div>

      <Link to="/" className={linkStyle}>
        Home으로 돌아가기 ↩️
      </Link>

      <Link to="/quiz" className={linkStyle}>
        🔄️ 다시 풀기 🔄️
      </Link>
    </div>
  );
};

export default Result;