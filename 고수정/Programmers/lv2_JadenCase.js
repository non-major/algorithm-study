//https://school.programmers.co.kr/learn/courses/30/lessons/12951
function solution(s) {
    let array = s.split(' ').filter(x => x !== ' ').map((x)=> {
        return x.toLowerCase()
    })
    array = array.map(x=>{
        [first, ...rest] = x
        return first.toUpperCase().concat(rest.join('')); 
    })
    return array.join(' ');
}

// map 두 번 쓰는 거 축약해보기? 