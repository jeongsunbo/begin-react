import React,{ useReducer} from 'react';
function reducer(state, action) { //상태가 어떻게 변경될지 reducer함수에 다 작성한다.
    switch(action.type){
        case "INCREASE":
        return state+1;
        case "DECREASE":
        return state-1;
        default:
        return state;
    }
}
const Counter2 = () => {
    // let number = 0; //state가 아닌 변수임
    const [ number, dispatch ] = useReducer(reducer,0);
    function Increase(){
        // number +=1; 이렇게 사용하지 않고 useState로 상태를 변경함
        // console.log(number); 콘솔로는 올라감
        dispatch({type:"INCREASE"}); //함수 호출을 dispath로 호출하면 reducer를 호출함 
    }
    function Decrease(){
        dispatch({type:"DECREASE"});
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={Decrease}>-1</button>
            <button onClick={Increase}>+1</button>
        </div>
    );
};

export default Counter2;