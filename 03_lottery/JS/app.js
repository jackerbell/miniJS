document.addEventListener("DOMContentLoaded", function(){
 });

const myNum = document.querySelectorAll(".myNum"); /* 내가 뽑은 로또 번호 */
const winningNum = document.querySelectorAll(".winningNum"); /* 당첨 번호 */
const slot = document.getElementById('slot'); /* 추첨시 돌리는 슬롯 */
var i = 0; /* 반복문 인덱스 i, j */
var j = 0;
var numList = null; /* 내가 뽑을 로또번호가 들어갈 배열을 담을 변수 */
var numList2 = null;/* 당첨번호가 들어갈 배열을 담을 변수 */
var mywinning = []; /* 당첨효과를 주기위해 당첨된 번호 수를 표시하기 위한 배열 */
var bonus = 0; /* 보너스 당첨 여부 0은 false 1은 true로 이용 */
var countO = 0; /* 당첨 번호 수 */
var countX = 0; /* 당첨되지 않은 번호 수(배열 채워 넣기 용) */


slot.addEventListener('click', lottoSimul)/*슬롯 클릭시 애니메이션을 포함한 추첨 동작 전반 실행 */

function lottoNum() {
  let lotto = [] /* 내가 뽑은 로또 번호를 넣을 배열 */
  let n = 0;
  while(i<myNum.length) {
    n = Math.floor(Math.random() * 45) + 1;
    if(! sameNum(n)){
      lotto.push(n); /* 로또 번호 중복 방지 */
      i++;
    }
  }
  function sameNum(n) {
    for(i=0;i<lotto.length;i++){
      if(n === lotto[i]){
        return true
      }
    }
    return false
  }
  return lotto /* 내 로또번호 7개가 들어간 배열값 반환 */
}

function lottoNum2() { /* 위의 lottoNum과 작동원리 동일 */
  let lotto2 = []
  let n2 = 0;
  while(j<winningNum.length) {
    n2 = Math.floor(Math.random() * 45) + 1;
    if(! sameNum2(n2)){
      lotto2.push(n2);
      j++;
    }
  }
  function sameNum2(n2) {
    for(j=0;j<lotto2.length;j++){
      if(n2 === lotto2[j]){
        return true
      }
    }
    return false
  }
  return lotto2 /* 당첨 로또번호 7개가 들어간 배열값 반환 */
}

function lottoSimul() { /*추첨 동작 전반.. 슬롯 돌리기(클릭이벤트)->  */
  slot.animate([ /* 슬롯을 돌리는 효과 */
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(-90deg)'},
    {transform: 'rotate(0deg)'}
  ],{
    duration:400
  }) 
  numList = lottoNum() /*내 로또번호 배열 할당 */
  for(i=0;i<numList.length;i++){
    myNum[i].innerHTML = `${numList[i]}`
  }
  console.log(myNum)
  numList2 = lottoNum2() /*당첨 로또번호  배열 번호 할당 */
  for(j=0;j<numList2.length;j++){
    winningNum[j].innerHTML = `${numList2[j]}`
  }

  for(i=0;i<numList.length-1;i++){
    for(j=0;j<numList2.length-1;j++){
      if(numList[i]===numList2[j]){
        mywinning.push='O'
        countO++;
        myNum[i].animate([ /* 당첨효과 */
          {backgroundColor:'rgb(235, 211, 73)'},
          {color:'purple'}
        ],{
          duration: 1500,
        }) 
      }else{
        mywinning.push='X'
        countX++;
      }
    }
  }

  if(numList[numList.length-1]===numList2[numList2.length-1]){
    bonus++;
    myNum[numList.length-1].animate([ /* 당첨효과 */
      {backgroundColor:'rgb(235, 211, 73)'},
      {color:'purple'}
    ],{
      duration: 1500
    }) 
  }
  if(countO===3){
    alert(`${countO}개 5등에 당첨되셨습니다.\n상금은 5천원 입니다.`)
  }else if(countO===4){
    alert(`${countO}개 4등에 당첨되셨습니다.\n상금은 5만원 입니다.`)
  }else if(countO===5){
    if(bonus) {
      alert(`${countO}개 3등에 당첨되셨습니다.\n상금은 150만원 입니다.`)
    }
    else{
    alert(`${countO}개 보너스${bonus} 맞춰줘 2등에 당첨되셨습니다.\n상금은 4000만원 입니다.`)
    }     
  }else if(mywinning.length===6){
    alert(`${countO}개 1등에 당첨셨습니다.\n상금은 20억입니다.`)
  }else{
    alert(`${countO}개 다음 기회에 뵈여 ㅠㅠ`)
  }
  countO = 0; /* 당첨 번호 수 초기화 */
}
