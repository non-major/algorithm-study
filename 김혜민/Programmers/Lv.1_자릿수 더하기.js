function solution(n) {
    let answer = 0;   
    let arr = n.toString().split('');
    let newArr = arr.map(item => answer += parseInt(item));    

    return answer;
}


// https://school.programmers.co.kr/learn/courses/30/lessons/12931