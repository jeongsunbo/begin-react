// import { Component } from "react";

import { useState } from "react";
import EventPracticeF1 from "./CounterF"

// class EventPractice extends Component {
//     state = {
//         message: '',
//     }
//     render() {
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input type="text" name="message" placeholder="아무거나 입력하세요" onChange={(e)=>{
//                     // console.log(e.target.value);
//                     this.setState({
//                         message: e.target.value
//                     })
//                 }}></input>
//                 <button onClick={()=>{
//                     console.log(this.state.message);
//                 }}>확인</button>
//             </div>
//         )
//     }
// }
// export default EventPractice;

// 함수형 컴포넌트

const EventPracticeF1 = () => {
    const [ message, setMessage ] = useState('');
    // const inputSomeThin = (e)=>setMessage();
    const inputSomeThin = (e)=>setMessage({message:e.target.value});
    const onClickSub = (e)=>setMessage(this.state.message);
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="message" placeholder="아무거나 쓰세요" onChange={inputSomeThin}>
            </input>
            <button onClick={onClickSub}>확인</button>
        </div>
    )
}
export default EventPracticeF1; 