function solution(numbers) {
    let arr = [];
    for(let i=0; i < 10; i++){
     arr.push(i);
    }

    let sum = arr.reduce((acc, curr) => acc + curr);

let sum2 = numbers.reduce((acc, curr) => acc + curr);

    return sum - sum2
}