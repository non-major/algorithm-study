function solution(seoul) {
    
    const ans = seoul.findIndex(e => e === 'Kim')
    return `김서방은 ${ans}에 있다`;
}

solution(["Jane", "Kim"]);


// https://school.programmers.co.kr/learn/courses/30/lessons/12919