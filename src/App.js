import './App.css';
import React from 'react';
// import Counter from './Counter';
// import CounterF from './CounterF';
// import EventPractice from './EventPractice';
// import MyComponent from './MyComponent';
import Counter2 from './Counter2';
//함수형 컴포넌트임
function App() {
  // const name = "리트";
  return (
    // * JSX에서 자바스크립트 표현식을 사용하려면 {}로 감싼다.
    // * if문 대신 조건부연산자 - 삼항연산자를 사용한다.
    <div className='react'>
      {/* <MyComponent name ='green' age ='30'>h2입니다.</MyComponent> */}
      {/* <Counter></Counter> */}
      {/* <MyComponentClass name="classGreen" age={30}>
        <h3>children임</h3>
      </MyComponentClass>
      <MyComponentClass></MyComponentClass>  */}
      {/* <h1>{ name === '리액트' ? (<span>리액트입니다.</span>) : null }</h1> */}
      {/* <CounterF></CounterF> */}
      {/* <EventPractice></EventPractice> */}
      {/* <h2>하이하이</h2> */}
      {/* <input type="text"/> */}
      <Counter2/>
    </div>
  );
  //자바스크립트로 하면
  // return React.createElement("div",null,"Hello",React.createElement("b",null,"react"));
}

export default App;
