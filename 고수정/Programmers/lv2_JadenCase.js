//https://school.programmers.co.kr/learn/courses/30/lessons/12951
function solution(s) {
    let arrayLower = s.split(' ').filter(x => x !== ' ').map((x)=> {
        return x.toLowerCase()
    })
    arrayFirstCapital = arrayLower.map(x=>{
        [first, ...rest] = x
        return first.toUpperCase().concat(rest.join('')); 
    })
    return arrayFirstCapital.join(' ');
}

// map 두 번 쓰는 거 축약해보기? 
// join은 array prototype method, concat은 array와 string prototype method
