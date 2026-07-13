import React, { useContext } from 'react'
import { ThemeColorContext } from '../context/context';
import { Card, Title, Wrapper } from '../components/layout/common';
import { useUserInfo } from '../context/UserInfoContext';
import styled from 'styled-components';

const MyPage = () => {
  const mode = useContext(ThemeColorContext);
  const { userInfo } = useUserInfo();

  return (
    <Wrapper>
      <Card>
        <Title>My Page</Title>

        <InfoBox accent={mode.main}>
          <InfoRow>
            <InfoLabel>이름</InfoLabel>
            <InfoText>{userInfo.name || '입력된 정보가 없습니다.'}</InfoText>
          </InfoRow>

          <InfoRow>
            <InfoLabel>이메일</InfoLabel>
            <InfoText>{userInfo.email || '입력된 정보가 없습니다.'}</InfoText>
          </InfoRow>

          <InfoRow>
            <InfoLabel>생년월일</InfoLabel>
            <InfoText>{userInfo.birth || '입력된 정보가 없습니다.'}</InfoText>
          </InfoRow>

          <InfoRow>
            <InfoLabel>성별</InfoLabel>
            <InfoText>{userInfo.gender || '입력된 정보가 없습니다.'}</InfoText>
          </InfoRow>
        </InfoBox>
      </Card>
    </Wrapper>
  )
}

export default MyPage;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.accent || '#5B8BF4'};
  background: #fafafa;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const InfoLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #52525b;
`;

const InfoText = styled.span`
  font-size: 14px;
  color: #18181b;
  text-align: right;
`;