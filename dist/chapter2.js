// 배열 number[] 배열의 타입 지정
let numArr = [1, 2, 3];
// 배열
let strArr = ["hello", "im", "winterlood"];
//제네릭 문법 배열
let boolArr = [true, false, true];
//타입을 추론 알수있음 유니온 타입.
let multiArr = [1, "hello"];
//다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5]
];
//튜플
//길이와 타입이 고정된 배열
let tup1 = [1, 2];
// //넘어서는 배열을 만들순없음
// tup1 = [1,2,3];
// tup1 = ["1","2","3"]
//순서가 달라도 문제가 생김
let tup2 = [1, "2", true];
export {};
