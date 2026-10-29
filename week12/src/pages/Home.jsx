import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <MenuDom>
                <Title>🦁 멋사 12주차 과제 🦁</Title> 
                <StyledLink to="/quiz">👉 퀴즈 풀러 가기 👈</StyledLink>
            </MenuDom>
        </div>
    )
}

export default Home;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #75b5f5;
    color: white;
  }
`;

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;
