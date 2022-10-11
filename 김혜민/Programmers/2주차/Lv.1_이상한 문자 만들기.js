function solution(s) {
  let text = "";
  let idx = 0;
  s.split("").forEach(e => {
    if (e !== " " && idx % 2 == 0) {
      text += e.toUpperCase();
      idx++;
    } else if (e !== " ") {
      text += e.toLowerCase();
      idx++;
    } else if (e === " ") {
      text += " ";
      idx = 0;
    }
  });
  return console.log(text);
}

solution("try hello world"); //"TrY HeLlO WoRlD"

// https://school.programmers.co.kr/learn/courses/30/lessons/12930
