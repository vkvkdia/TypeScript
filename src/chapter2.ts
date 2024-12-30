// 배열 number[] 배열의 타입 지정
let numArr:number[]  = [1,2,3];

// 배열
let strArr : string[] = ["hello", "im", "winterlood"];

//제네릭 문법 배열
let boolArr: Array<boolean> = [true,false,true];

//타입을 추론 알수있음 유니온 타입.
let multiArr: (number | string)[] = [1, "hello"];


//다차원 배열의 타입을 정의하는 방법
let doubleArr : number[][] = [
    [1,2,3],
    [4,5]
]

//튜플
//길이와 타입이 고정된 배열
let tup1 :[number, number] = [1,2];

// //넘어서는 배열을 만들순없음
// tup1 = [1,2,3];
// tup1 = ["1","2","3"]

//순서가 달라도 문제가 생김
let tup2 : [number, string, boolean] = [1,"2", true];

// push, pop 가능
tup1.push(1); //배열 메소드를 사용할땐 길이에 영향받지않는다.
tup1.pop();

//
const users :[string,number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
//    ["박아무개", 4,5] 첫번째 요소의 타입이 다르기때문에 매칭이안된다.
]