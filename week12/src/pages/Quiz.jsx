import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://week12-api-rcwo.onrender.com';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    // 문제 목록 가져오기
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/questions`);
                setQuestions(response.data);
            } catch (error) {
                console.error('문제 불러오기 실패:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    const handleSelectAnswer = (questionId, answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: answer,
        });
    };

    const handleSubmit = async () => {
        const answers = questions.map((question) => ({
            id: question.id,
            answer: selectedAnswers[question.id],
        }));

        if (answers.some((item) => !item.answer)) {
            alert('모든 문제의 답을 선택해주세요‼️');
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}/api/answers`, {
                answers: answers,
            });

            const results = response.data.results;
            const score = results.filter((result) => result.correct).length;

            navigate(`/result?score=${score}`);
        } catch (error) {
            console.error('답안 제출 실패:', error);
            alert('⚠️답안 제출 중 오류가 발생했습니다.⚠️');
        }
    };

    if (loading) {
        return <div>문제를 불러오는 중입니다...</div>;
    }

    return (
        <QuizDom>
            <Title>FE 퀴즈</Title>

            {questions.map((question, index) => (
                <QuestionCard key={question.id}>
                    <QuestionTitle>
                        {index + 1}. {question.question}
                    </QuestionTitle>

                    <AnswerList>
                        {question.answers.map((answer) => (
                            <AnswerButton
                                key={answer}
                                onClick={() => handleSelectAnswer(question.id, answer)}
                                $isSelected={selectedAnswers[question.id] === answer}
                            >
                                {answer}
                            </AnswerButton>
                        ))}
                    </AnswerList>
                </QuestionCard>
            ))}

            <SubmitButton onClick={handleSubmit}>
                제출 버튼
            </SubmitButton>
        </QuizDom>
    );
};

export default Quiz;

const QuizDom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 800px;
  gap: 18px;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #4a4a4a;
  margin: 0;
`;

const QuestionCard = styled.div`
  width: 100%;
  background-color: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QuestionTitle = styled.h3`
  font-size: 22px;
  color: #535353;
  margin: 0;
`;

const AnswerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
`;

const AnswerButton = styled.button`
  background-color: ${(props) => props.$isSelected ? '#75b5f5' : '#eeeeee'};
  color: ${(props) => props.$isSelected ? 'white' : '#535353'};
  border-radius: 15px;
  padding: 10px 18px;
  cursor: pointer;
  font-weight: 700;
  margin: 0;

  &:hover {
    background-color: #9ecfff;
    color: white;
  }
`;

const SubmitButton = styled.button`
  background-color: #75b5f5;
  color: #ffffff;
  border-radius: 25px;
  padding: 15px 40px;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
  

  &:hover {
    background-color: #9ecfff;
  }
`;