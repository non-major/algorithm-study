function solution(s) {
    
    // let num = s.split(" ");
    // let sort = num.sort((a, b) => a - b);
    
    let sort = s.split(" ").sort((a, b) => a - b);   

    return `${sort[0]} ${sort[sort.length - 1]}`
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12939

solution("3 -1 2 4");