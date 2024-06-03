import React from 'react';
import styled from 'styled-components';
import WriteHeader from './WriteHeader';
import LoginHeader from './LoginHeader';
import MypageHeader2 from './MyPageHeader2';
import Header2 from './MyPageHeader2';

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin: 10px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 200px 10px;
  position: relative;
  height: 150px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: bold; /* 글자를 굵게 설정 */
  flex-grow: 1; /* 가능한 모든 공간을 차지 */
  text-align: center; /* 중앙 정렬 */
`;

const HomeButton = styled.button`
  color: black; 
  padding: 15px 32px; 
  text-align: center; 
  display: inline-block; 
  font-size: 16px; 
  border-radius: 12px; 
  border: solid black 2px;
  cursor: pointer; 
  position: absolute;
  right: 200px; /* 오른쪽으로 고정 */
  background-color: transparent; 
`;

const MypageHeader = () => {
    return (
        <div>
            <TitleWrapper>
                <Title>My Page</Title>
                <HomeButton>로그인</HomeButton>
            </TitleWrapper>
            <Line />
            <WriteHeader />
            <LoginHeader />
            <MypageHeader2 />
            
        </div>
    );
}

export default MypageHeader;
