function solution(x) {

    let num = (x + "").split("").reduce((acc, cur) => acc*1 + cur*1 , 0);
    return x % num == 0 ? true : false;

}

// https://school.programmers.co.kr/learn/courses/30/lessons/12947