function solution(s) {
    var answer = [];
    var array = s.split(' ');
    answer.push(Math.min(...array))
    answer.push(Math.max(...array))
    return answer.join(' ');
}