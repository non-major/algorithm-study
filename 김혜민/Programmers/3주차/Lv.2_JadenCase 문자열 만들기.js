function solution(s) {
    let arr = [];
    s.split(" ")
     .map(e => {
        if(e !== "")  {
            let tmp = e[0].toUpperCase() + e.slice(1).toLowerCase()
            arr.push(tmp);
        } else arr.push(e);
    })
    
    return arr.join(" ");
}

solution("3people unFollowed me"); //	"3people Unfollowed Me"
solution("for the last week"); //	"For The Last Week"
solution("for  the last week");

// https://school.programmers.co.kr/learn/courses/30/lessons/12951
