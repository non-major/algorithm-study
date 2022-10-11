function solution(n) {
   let arr = [];
    for(let i=n; i > 1; i--) {
        if (n % i === 1) arr.push(i)
   }
   return console.log(Math.min(...arr));
}


solution(10); // 3
solution(12); // 11

// https://school.programmers.co.kr/learn/courses/30/lessons/86051