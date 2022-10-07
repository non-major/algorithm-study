function solution(seoul) {
    var answer = '';
    seoul.forEach((x,idx)=>{
        if(x==='Kim'){
         answer = `김서방은 ${idx}에 있다`
        }
    })
    return answer;
}
