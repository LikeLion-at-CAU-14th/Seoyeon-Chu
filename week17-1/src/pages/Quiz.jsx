import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://week12-api-rcwo.onrender.com";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/questions`);
        setQuestions(response.data);
      } catch (error) {
        console.error("문제 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleSelectAnswer = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = async () => {
    const answers = questions.map((question) => ({
      id: question.id,
      answer: selectedAnswers[question.id],
    }));

    if (answers.some((item) => !item.answer)) {
      alert("모든 문제의 답을 선택해주세요‼️");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/answers`, {
        answers,
      });

      const results = response.data.results;
      const score = results.filter((result) => result.correct).length;

      navigate(`/result?score=${score}`);
    } catch (error) {
      console.error("답안 제출 실패:", error);
      alert("⚠️답안 제출 중 오류가 발생했습니다.⚠️");
    }
  };

  if (loading) {
    return <div className="text-xl text-[#4a4a4a]">문제를 불러오는 중입니다...</div>;
  }

  return (
    <div className="m-0 flex w-4/5 max-w-[800px] flex-col items-center gap-[18px]">
      <h1 className="m-0 text-[40px] font-bold text-[#4a4a4a]">
        FE 퀴즈
      </h1>

      {questions.map((question, index) => (
        <section
          key={question.id}
          className="
            flex w-full flex-col gap-5 rounded-[20px]
            bg-white p-[25px]
            shadow-[2px_2px_5px_rgba(0,0,0,0.1)]
          "
        >
          <h3 className="m-0 text-[22px] font-bold text-[#535353]">
            {index + 1}. {question.question}
          </h3>

          <div className="m-0 flex flex-wrap gap-[10px]">
            {question.answers.map((answer) => {
              const isSelected =
                selectedAnswers[question.id] === answer;

              return (
                <button
                  key={answer}
                  type="button"
                  onClick={() =>
                    handleSelectAnswer(question.id, answer)
                  }
                  className={`
                    m-0 cursor-pointer rounded-[15px]
                    px-[18px] py-[10px] font-bold
                    transition-colors duration-200
                    hover:bg-[#9ecfff] hover:text-white
                    ${
                      isSelected
                        ? "bg-[#75b5f5] text-white"
                        : "bg-[#eeeeee] text-[#535353]"
                    }
                  `}
                >
                  {answer}
                </button>
              );
            })}
          </div>
        </section>
      ))}

      <button
        type="button"
        onClick={handleSubmit}
        className="
          cursor-pointer rounded-[25px] bg-[#75b5f5]
          px-10 py-[15px] text-xl font-bold text-white
          transition-colors duration-200 hover:bg-[#9ecfff]
        "
      >
        제출 버튼
      </button>
    </div>
  );
};

export default Quiz;