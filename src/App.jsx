import { useState } from 'react'
import Btns from './Component/Btn';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
// state 값이 바뀌면 리렌더링됨
// 구조분해할당 공부하기
  const Up = () => {
    console.log('더하기');
    setCount(count + 1);
  }

  const Down = () => {
    setCount(count - 1);
  }

  const Reset = () => {
    setCount(0);
    alert('리셋 되었습니다.');
  }

  return (
    <div>
      <Btns onClick={Up} sign="더하기" />
      <Btns onClick={Down} sign="빼기" />
      <Btns onClick={Reset} sign="초기화" />
      <br />
      {count}
    </div>
  )
}

export default App;
