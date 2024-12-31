// 타입 별칭
//타입을 지정하고
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio?: string;
    location: string;
}

//타입별칭 할떄

// 타입으로 가져와서 정함
let user : User = {
    id : 1,
    name : "윤성훈",
    nickname : "vkvkdia",
    birth: "1997-04-25",
    location : "부산"

}

//객체 타입 유연하게 해줌 인덱스 시그니처


//인덱스 시그니처 키와 값이 같음
type CountryCodes = {
    [key: string]: string;
}

let contryCodes : CountryCodes = {
    korea : "ko",
    UnitedState : "us",
    UnitedKingdom: "uk"
}

type contryNumberCodes = {
    [key: string]: number;
    // 이런식으로 지정하는거 안됨 korea : string; 타입의 벨류는 일치시켜야한다.
    korea : number;
}

let countryNumberCodes : contryNumberCodes = {
    korea : 410,
    japen : 200,
}

//이렇게하면 빈프로퍼티인데 오류를일으키는값이없어서 오류
// let contryNumberCodes : contryNumberCodes = {
//   //  korea :400
// }

