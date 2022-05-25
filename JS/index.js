// 타이핑 효과 만들기
const content = "안녕하세요! \n wecode 35기 홍현진의 자기소개 페이지 입니다:)";
const text = document.querySelector(".introduce");
let i = 0;
function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br>": txt;
  if (i >content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval (typing, 100);
// setInterval은 일정한 주기로 함수를 반복
// setTimeout은 일정한 시간이 지난 후 함수를 시행
//  재귀함수로 작성하면 반복 시행을 만들 수 있다.
