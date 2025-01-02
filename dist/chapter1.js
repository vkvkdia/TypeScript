"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// number
let num1 = 123;
// :number 타입주석 타입 어노테이션을 뜻함
let num2 = -123;
let num3 = -0.123;
let num4 = Infinity;
let num5 = NaN;
num1.toFixed();
//number 타입에만 적용할수 있는 메소드
//string
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello ${num1}`;
//str1 = 123; //string 값만 넣을수 있게
//str1.toUpperCase();
// boolean
let bool1 = true;
let bool2 = false;
//null
let null1 = null;
//null 이외에 값을 넣을수 없음
//undefined
let unde1 = undefined;
//let numA : number = null;
//타입스크립트에선 잠깐 넣어줄순없음
//대신에    "strictNullChecks": false 라는걸 config에서 설정했다면
let numA = null; // 이런식으로 처리할수있음.
//리터널 타입
let numB = 10;
//값으로 만들었기에 다른거면 안됨
// 리터널 타입
// 리터널 -> 값
//numB = 12;
// let strA : "hello" = "hello"
