document.addEventListener("DOMContentLoaded", function(){

 });

const myNum = document.querySelectorAll(".myNum");
const winningNum = document.querySelectorAll(".winningNum");
const slot = document.getElementById('slot');
var i = 0;
var j = 0;
var numList = null;
var numList2 = null;
function slotWork(){
  
}
slot.addEventListener('click', function () {
  slot.animate([
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(-90deg)'},
    {transform: 'rotate(0deg)'}
  ],{
    duration:400
  }) 
  numList = lottoNum()
  for(i=0;i<numList.length;i++){
    myNum[i].innerHTML = `${numList[i]}`
  }
  console.log(myNum)
  numList2 = lottoNum2()
  for(j=0;j<numList2.length;j++){
    winningNum[j].innerHTML = `${numList2[j]}`
  }
}
)

  function lottoNum() {
    let lotto = []
    let n = 0;
    while(i<myNum.length) {
      n = Math.floor(Math.random() * 45) + 1;
      if(! sameNum(n)){
        lotto.push(n);
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
    return lotto
  }

  function lottoNum2() {
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
    return lotto2
  }
