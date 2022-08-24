const keys = document.querySelectorAll('.key')

function playKey(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)//data-key라는 사용자 정의 속성으로 .key와 audio tag를 매칭시킨게 포인트.. 
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  console.log(e.keyCode)
  if(!key) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
}

window.addEventListener("keydown", playKey);
