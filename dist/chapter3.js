"use strict";
//객체
//object
//
//user.id
//object타입에 id가없다고 에러뜸
Object.defineProperty(exports, "__esModule", { value: true });
//객체 리터널까지 설정 객체리터널
let user = {
    id: 1,
    name: "윤성훈"
};
user.id;
//객체타입 정의 시 아이디랑 네임이있으면 dog
// object로 정의하는게 아니라 객체를 이루는 객체의 구조를 기준으로 타입을 정의
let dog = {
    name: "홍이",
    color: "brown"
};
// 구조적 타입 시스템 property base type
// 이름을 기준으로는 명목적 타입시스템 이건 타입스크립트에서 안씀
// 있어도 되고 없어도 되고 ? 있으면 무조건 number
//선택적 프로퍼티 옵셔널 프로퍼티
let user1 = {
    id: 1,
    name: "윤성훈"
};
user1 = {
    name: "파파얌"
};
//readonly를 쓰면 절대 값이 변경되지 않는다.
let config = {
    apiKey: "MY API KEY"
};
