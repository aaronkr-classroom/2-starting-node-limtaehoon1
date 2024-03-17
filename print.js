// print.js
"use strict";

// @TODO: 변수를 값이 주세요.
let charName= "손흥민", 
    charAge =32, 
    charDomain= "영국";

// @TODO: 3변수를 보간된 값으로 인쇄하는 함수를 만들어 주세요.
let printChar = (charAge,charName,charDomain) => {
    return ({charAge,charName,charDomain})
}
    console.log("변수로 만든 메시지")// console.log 변수로 만든 메시지.
    console.log("이름 %s",charName)// %s (string)
    console.log("나이 %d",charAge)// %d (digit)
    console.log("사는 곳 : ${charDomain}" )// `${변수}` (템플릿 문자열)
    










// 숙제 체크 테스트에 필요함
module.exports = printChar;
