//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

//다른것과 다르게 = 이 없음
// 숫자형 enum
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Language {
    korea = "ko",
    english = "en",
}


//0이 저장됨
const user1 = {
    name : "이정환",
    role : Role.ADMIN, // 0 <- 관리자
    Language : Language.korea
}

const user2 ={
    name : "홍길동",
    role : Role.USER // 1 <- 일반 유저
}

const user3 = {
    name : "아무개",
    role : Role.GUEST
}

console.log(user3.role)