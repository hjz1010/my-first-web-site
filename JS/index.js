// 타이핑 효과 만들기
const content = "안녕하세요! \n wecode 35기 홍현진의 자기소개 페이지입니다:) \n          ";
const text = document.querySelector(".introduce");
let i = 0;
let count = 1;  // clearInterval로 반복을 멈추기 위해 실행횟수를 카운팅

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br>": txt;
  if (i >= content.length - 1) {
    if (count === 5){    // 원하는 카운트 횟수 도달 시 clearInterval 시행
      clearInterval(intervalID);
      // console.log(clearInterval(intervalID));  //Output: undefined
      // 근데 문제는 이게 왜 웹페이지에 출력이 되는것인가!!!!
      // 조건이 i > content.length 라서.. 반복 마지막에 txt값이 없는 오류가 있었다. 그래서 아무거나 등장한 값을 txt에 넣고 출력한 듯!
    }
    else {
      text.textContent = "";
      i = 0;
      count++;   // 한 바퀴 반복 후 count+1
    }
  }
}

let intervalID = setInterval(typing, 100);
// setInterval은 일정한 주기로 함수를 반복
// setTimeout은 일정한 시간이 지난 후 함수를 시행
//  재귀함수로 작성하면 반복 시행을 만들 수 있다.
