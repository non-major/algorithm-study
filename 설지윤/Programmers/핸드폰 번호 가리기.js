function solution(phone_number) {
  var answer = "";
  var num = phone_number.length - 4;
  answer = "*".repeat(num) + phone_number.substring(num);
  return answer;
}
