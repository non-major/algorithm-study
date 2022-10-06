function solution(n) {
    if(Number.isInteger(Math.sqrt(n))) return (Math.sqrt(n)+1)**2
    else return -1;
    
    // return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n)+1)**2 : -1
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12934