import { useState } from "react";
import styled from "styled-components";

const MyButton = styled.button`
//구조분해할당
border: 4px solid ${({ isSelected }) => {
        return (isSelected ? 'blue' : 'red');
    }};

border-radius: ${(props) => {
        return (props.isSelected ? '100px' : '15px');
    }};
background-color: ${(props) => {
        return (props.isSelected ? 'black' : 'gray');
    }};    

color: white;
padding: 20px 30px;
margin: 10px;
`;

const Selector = () => {
    const [country, setCountry] = useState('');
    const selectCountry = (selectedCountry) => {
        setCountry(selectedCountry);
        console.log('클릭됨');
    };

    let age = 100;
    console.log(`
    나는 ${age}살 입니다
    `);

    return (
        <>
            <div>
                <MyButton type="button" className="japan" onClick={() => selectCountry('일식')} isSelected={country === '일식'}>일식</MyButton>
                <MyButton type="button" className="china" onClick={() => selectCountry('중식')} isSelected={country === '중식'}>중식</MyButton>
                <MyButton type="button" className="korea" onClick={() => selectCountry('한식')} isSelected={country === '한식'}>한식</MyButton>
            </div>

            <div>
                선택된 음식의 Origin <br />
                {country}
            </div>
        </>
    );
};

export default Selector;
