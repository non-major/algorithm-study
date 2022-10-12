function solution(s) {
  let arr = s.split(' ').map(x => x.split(''));
  
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] = (j === 0) ? arr[i][j].toUpperCase() : arr[i][j].toLowerCase();
      }
  };
  
  return arr.map(x => x.join('')).join(' ');
}

// 리팩토링 > 런타임 에러
// function solution(s) {
//     return s.split(' ').map(x => x[0].toUpperCase() + x.slice(1, x.length).toLowerCase()).join(' ');
// }

// 다른 사람 풀이
// function solution(s) {
//     return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
// }

/* 회고
index 0으로 바로 접근한 것을 charAt(0)으로 바꿔 접근하니 런타임 에러가 발생하지 않았다.
검색 결과 시간 차이가 나는 이유는 알 수 없었지만 index로 직접 접근하는 것이 가독성이 떨어지고(코드 내에서 배열 접근과 혼동될 수 있음)
일부 브라우저에서 지원하지 않는다고 한다. 앞으로 개별문자 접근할 때는 charAt을 사용하는 습관을 들여야겠다! */