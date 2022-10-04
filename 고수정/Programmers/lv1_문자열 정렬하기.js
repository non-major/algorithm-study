function solution(strings, n) {
    var answer = [];
    const arr = [] ;
    const map = strings.map((str) => str.slice(n, n+1)); 
    // 비교할 글자 배열로 만들기
    for(let i=0; i < strings.length; i++){
        arr.push([strings[i], map[i]])
    }
    console.log(arr);
    // arr = [['sun', 'u'], ['bed', 'e'], ['car', 'a']]
    arr.sort((a, b) => {
        let diff = a[1].charCodeAt() - b[1].charCodeAt();
        if(diff > 0){
            return diff;
        }
        if(diff < 0){
            return diff;
        }
        if(diff = 0){
            return 0;
        }
})

for(let x of arr){
    answer.push(x[0]);
}

    return answer;
}
