function solution(n) {
  var root = Math.sqrt(n);
  return root % 1 == 0 ? Math.pow(root + 1, 2) : -1;
}
