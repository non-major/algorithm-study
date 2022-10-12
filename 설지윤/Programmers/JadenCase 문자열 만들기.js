function solution(s) {
  return s
    .split(" ")
    .map((val) => val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase())
    .join(" ");
}
