function solution(strings, n) {
  return strings.sort((a, b) => {
    // sort함수 속성 이용
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else return a < b ? -1 : 1;
  });
}
