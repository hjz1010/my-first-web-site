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
