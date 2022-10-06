function solution(x) {
  var sum = x
    .toString()
    .split("")
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur));

  return x % sum == 0 ? true : false;
}
