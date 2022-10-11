function solution(num) {
    var arr = String(num).split('');
    var sum = arr.reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0)
    return num % sum === 0 ? true : false;
}