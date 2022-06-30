import { Component } from "react";

class MyComponentClass extends Component{
    render() {
        //객체 구조분해할당
        // const { name, age,children } = props;
        const {name, age, children} = this.props;
        return(
            <div>
                제이름은 {name}입니다.
                나이는 {age}입니다.
                {children}
            </div>
        );
    };
}
MyComponentClass.defaultProps = {
    name: "기본이름",
    age: 20,
    children: "aaa(children)",
}
export default MyComponentClass;