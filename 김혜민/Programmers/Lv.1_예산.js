function solution(d, budget) {
    
    let cnt = 0;
    d.sort((a, b) => a - b);  
    
    for (let i = 0; i < d.length; i++) {
        budget -= d[i];
        if (budget < 0 ) {
            break;
        } 
        cnt++;        
    };

    

    return console.log(cnt);
}

solution([1,3,2,5,4], 9);


// https://school.programmers.co.kr/learn/courses/30/lessons/12982?language=javascript