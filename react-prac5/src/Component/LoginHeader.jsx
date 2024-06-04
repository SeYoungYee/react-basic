import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid gray;
    height: 100px;

    `;

const Title = styled.h1`
    font-size: 40px;
    `;

const Btns = styled.div`
    position: absolute;
    right: 410px;
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

const LoginHeader = ({ title, btns }) => {
    return (
        <StyledHeader>
            <Title>{title}</Title>
            <Btns>
                <Button>Login</Button>
            </Btns>
        </StyledHeader>
    );
}

export default LoginHeader;
