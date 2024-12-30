
// number
let num1: number = 123;

// :number 타입주석 타입 어노테이션을 뜻함

let num2: number = -123;
let num3: number = -0.123;
let num4: number = Infinity;
let num5: number = NaN;


num1.toFixed()
//number 타입에만 적용할수 있는 메소드


//string

let str1 : string = "hello";
let str2 : string = 'hello';
let str3 : string = `hello ${num1}`;

//str1 = 123; //string 값만 넣을수 있게
//str1.toUpperCase();

// boolean
let bool1 : boolean = true;
let bool2 : boolean = false;

//null
let null1: null = null;
//null 이외에 값을 넣을수 없음

//undefined
let unde1: undefined = undefined;

//let numA : number = null;
//타입스크립트에선 잠깐 넣어줄순없음
//대신에    "strictNullChecks": false 라는걸 config에서 설정했다면
let numA : number = null; // 이런식으로 처리할수있음.

//리터널 타입
let numB: 10 = 10;
//값으로 만들었기에 다른거면 안됨
// 리터널 타입
// 리터널 -> 값
//numB = 12;
// let strA : "hello" = "hello"