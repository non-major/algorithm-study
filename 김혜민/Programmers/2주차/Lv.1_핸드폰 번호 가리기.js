function solution(phone_number) {
    let tmp1 = "";
    for (let i = 0; i < phone_number.length - 4; i++) {
        tmp1 += "*";
    }    
    let tmp2 = phone_number.slice(phone_number.length - 4);

    return tmp1 + tmp2;
    
    // return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12948