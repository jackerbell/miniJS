const keys = document.querySelectorAll('.key')
const displayKey = document.querySelector('#displayKey')


function playKey(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)//data-key라는 사용자 정의 속성으로 .key와 audio tag를 매칭시킨게 포인트.. 
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  
  console.log(e.keyCode)//입력 값 확인
  
  if(!key) return;

  key.classList.add('playing')
  displayKey.innerHTML = key.getAttribute('data-scale')
  audio.currentTime = 0;
  audio.play();
  
  e.preventDefault();// 키를 계속 누르고 있을 경우 transition이 사라지지 않고 계속 남아있으므로 여기서 이벤트 중지 시켜 중복 방지
}

function removePlaying(e){
  console.log(e.propertyName) //transitioned 이벤트의 대상인 .key(e.keyCode)를 가리킴 
  this.classList.remove("playing"); 
}

keys.forEach(key => key.addEventListener("transitionend", removePlaying));

window.addEventListener("keydown", playKey);

