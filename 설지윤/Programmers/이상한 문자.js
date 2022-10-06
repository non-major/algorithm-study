function solution(s) {
  let str = s.split(" ");
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    str[i].split("").map((val, idx) => {
      idx % 2 == 0
        ? (answer += val.toUpperCase())
        : (answer += val.toLowerCase());
    });
    answer += " ";
  }
  return answer.slice(0, -1);
}

// function solution(s) {
//    return s.split(" ").map(i=>{
//        return i.split("").map((i,j)=>{
//            return j%2==0? i.toUpperCase():i.toLowerCase()
//        }).join("")
//    }).join(" ")
// }
