import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

const BASE_URL = 'https://week12-api-rcwo.onrender.com';

const Result = () => {
    const [searchParams] = useSearchParams();
    const score = searchParams.get('score');

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResult = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/result?score=${score}`);
                setMessage(response.data.message);
            } catch (error) {
                console.error('결과 불러오기 실패😭:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchResult();
    }, [score]);

    if (loading) {
        return <div>결과를 불러오는 중입니다...</div>;
    }

    return (
        <ResultDom>
            <Title>결과 보기</Title>

            <ScoreText>
                내 점수: {score} / 5
            </ScoreText>

            <MessageText>
                {message}
            </MessageText>

            <StyledLink to="/">
                Home으로 돌아가기 ↩️
            </StyledLink>

            <StyledLink to="/quiz">
                🔄️ 다시 풀기 🔄️
            </StyledLink>
        </ResultDom>
    );
};

export default Result;

const ResultDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: white;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 0;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #535353;
  margin: 0;
`;

const ScoreText = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #333333;
  margin: 0;
`;

const MessageText = styled.div`
  font-size: 25px;
  color: #4a4a4a;
  margin: 0;
`;

const StyledLink = styled(Link)`
  width: 250px;
  height: 60px;
  background-color: #eeeeee;
  color: #4a4a4a;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  margin: 0;

  &:hover {
    background-color: #75b5f5;
    color: white;
  }
`;