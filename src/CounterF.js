import React, { useState } from 'react';

const CounterF = () => {
    // useState함수를 호출하면 배열을 반환해줌
    // 배열의 0번째에는 초기값
    // 베열의 1번째에는 이값을 업데이트 해주는 함수 (변경되는 값)
    const [ message, setMessage ] = useState('안녕');
    // console.log(useState(0));
    const onClickEnter = ()=>setMessage('안녕하세요!');
    const onClickLeave = ()=>setMessage('안녕히가세요!');
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <p>{message}</p>
        </div>
    );
};

export default CounterF;