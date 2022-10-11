function solution(numbers) {
    let result = 0
    let num = 0 
    numbers.forEach((n)=>{result += n})
    for(let i = 0 ; i <=9;i++){
        num +=i
    }
    return num-result
}