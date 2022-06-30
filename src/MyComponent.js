// const MyComponent = ()=> {
//     return <div>새로운 컴포넌트 생성</div>;
// }
// function MyComponent() {
//     return <div>새로운 컴포넌트 생성</div>;
// }
// export default MyComponent;

import React from 'react';
import PropTypes from 'prop-types';
//rsc 단축어 
//객체 구조분해할당 name = props.name, age = props.age임 props -> {name, age}
const MyComponent = ({ name, age,children }) => {
    //객체 구조분해할당
    // const { name, age,children } = props;
    return (
        <div>
            안녕하세요. 제이름은 {name}입니다.<br/>
            제나이는 {age}입니다.<br/>
            {/* <MyComponent name="Green"/> */}
            {children}입니다.

        </div>
    );
};
// props 기본값설정
MyComponent.defaultProps = {
    name: "기본이름",
    age: "1",
};
MyComponent.propTypes = {
    name: PropTypes.string
}
// array : 배열
// boolean : true 혹은 false
// func : 함수
// number : 숫자
// object : 객체
// string : 문자
// any : 아무 종류
// https://github.com/facebook/prop-types
export default MyComponent;