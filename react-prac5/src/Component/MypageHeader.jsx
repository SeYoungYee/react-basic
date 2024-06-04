import React from 'react';
import styled from 'styled-components';
import WriteHeader from './WriteHeader';
import LoginHeader from './LoginHeader';
import MypageHeader2 from './MyPageHeader2';




const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid gray;
    height: 130px;
    `;

const Title = styled.h1`
    font-size: 40px;
      position: absolute;
    font-size: 40px;
    left: 100px;
    `;

const SubTitle = styled.p`
    font-size: 14px;
`;

const Btns = styled.div`
    position: absolute;
    right: 250px;
    `;

const Button = styled.button`
    background-color: transparent;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 0 3px;
    cursor: pointer;
    width: 100px;

    &:hover {
        background-color: #808080;
        color: white;
        
    }

    &:active {
        background-color: #2c2c2c;
        border-color: black;
        
    }
    `;

const MypageHeader = () => {
    return (
        <>
            <StyledHeader>
                <Title>Login</Title>
                
            </StyledHeader>
            <WriteHeader title={'Write'} btns={['Home']} />
            <MypageHeader2 title={'My Page'} btns={['Home', 'LogOut']} />
            
        </>
    );
}

export default MypageHeader;
