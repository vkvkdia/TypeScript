"use strict";
//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
Object.defineProperty(exports, "__esModule", { value: true });
//다른것과 다르게 = 이 없음
// 숫자형 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
// enum이 자바스크립트 객체로 변환
(function (Language) {
    Language["korea"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
//0이 저장됨
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0 <- 관리자
    Language: Language.korea
};
const user2 = {
    name: "홍길동",
    role: Role.USER // 1 <- 일반 유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST
};
console.log(user3.role);
