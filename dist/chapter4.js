"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//타입별칭 할떄
// 타입으로 가져와서 정함
let user = {
    id: 1,
    name: "윤성훈",
    nickname: "vkvkdia",
    birth: "1997-04-25",
    location: "부산"
};
let contryCodes = {
    korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
};
let countryNumberCodes = {
    korea: 410,
    japen: 200,
};
//이렇게하면 빈프로퍼티인데 오류를일으키는값이없어서 오류
// let contryNumberCodes : contryNumberCodes = {
//   //  korea :400
// }
