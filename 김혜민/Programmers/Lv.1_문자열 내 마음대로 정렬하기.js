function solution(strings, n) {

    // let obj = {};
    // strings.map((item) => {
    //     obj[item.slice(0, n <= 1 ? 1 : n-1)] = item.slice(n);
    // });

    // console.log(obj);

    // const ans = Object.entries(obj);
    // console.log(ans);
    // ans.sort(function(a, b) {
    //     return a[1] - b[1];
    //   });
    
    // console.log(ans);
    
    return strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        else return a > b ? 1 : -1;
    });  
    
    // 다른사람풀이    
    // return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

solution(["sun", "bed", "car"], 1);


// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript