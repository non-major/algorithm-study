function solution(num)
{
    var answer = 0;

    var str = String(num);

    var arr = str.split('');
    
    answer = arr.reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0)
    
    return answer;
}