import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  padding: 20px;
  height: 70px;
`;

const RightHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  
`;

const HeaderItem = styled.div`
  margin-right: 15px;
  cursor: pointer;
  font-weight: bold;
  color: black;
`;

const Title = styled.p`

    font-weight: bold;
    font-size: 40px;
    text-align: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin: 10px 0;
`;

const HomeButton = styled.button`
  padding: 15px 30px; /* 패딩 조정 */
  border-radius: 12px;
  border: solid 2px black;
  cursor: pointer;
  font-size: 16px;
  background-color: transparent;
  color: black;
  transition: background-color 0.3s, color 0.3s; /* 전환 효과 추가 */
  
  &:hover {
    background-color: black;
    color: white;
  }
`;

const MyPageHeader2 = () => {
    return (
        <>
            <HeaderContainer>
                    <Title>My Page</Title>
            </HeaderContainer>

            <RightHeader>
                    <HeaderItem><HomeButton>Home</HomeButton></HeaderItem>
                    <HeaderItem><HomeButton>Write</HomeButton></HeaderItem>
                    <HeaderItem><HomeButton>Logout</HomeButton></HeaderItem>
                </RightHeader>
            <Line />
        </>
    );
}

export default MyPageHeader2;
