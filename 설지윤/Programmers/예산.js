function solution(d, budget) {
  var dsort = d.sort((a, b) => a - b);
  var sum = 0;
  var cnt = 0;

  for (var i = 0; i < dsort.length; i++) {
    sum += dsort[i];
    cnt++;
    if (sum > budget) {
      cnt--;
    }
  }
  return cnt;
}

const d1 = [1, 3, 2, 5, 4];
const budget1 = 9;
const d2 = [2, 2, 3, 3];
const budget2 = 10;

console.log("result:" + solution(d1, budget1));
console.log("result:" + solution(d2, budget2));
