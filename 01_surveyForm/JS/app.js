var questions = ['1. 미래에 대한 희망이 없다.','2. 이유없이 죄책감이 든다.','3. 하루종일 우울한 기분이 든다.',
'4. 나만 소외되는 느낌이 든다.','5. 열등감이 생기고 그로 인해 스트레스를 받는다.','6. 식습관이 변하지 않았는데 갑자기 체중증가 또는 감소 증상이 나타난다.',
'7. 과수면 또는 불면증에 시달린다.','8. 일상생활이 불만족스럽다.','9. 별일 아닌 것에 대해서도 눈물이 자주난다.','10. 자살충동을 느껴본 적이 있다.','11. 건강에 대해 자신이 없고 성생활이 무의미하다.',
'12. 나 자신에 대해 싫고 추한 느낌이 든다.','13. 항상 피곤해서 일상생활을 할 수가 없다.','14. 실패자 낙오자라는 생각을 자주한다.','15. 어떤 것의 결정을 스스로 하지 못한다.']
var answers = ['매우 그렇다','그렇다','보통이다','아니다']
var tNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
var values = [4,3,2,1]
var total = 0;
function startSV() {
  var body = document.querySelector('body')
  var wrap = document.querySelector('#wrap')
  var surveyForm = document.querySelector('#surveyForm')
  wrap.style.display = 'none'
  surveyForm.style.display = 'block'
  surveyForm.innerHTML += '<h1 style="font-weight=bold;">우울증 진단을 위한 설문입니다.</h1>'
  for(var i =0; i<15; i++){
    var test_qst = document.createElement('p')
    test_qst.innerHTML += `<b>${questions[i]}<b>`
    surveyForm.appendChild(test_qst)
    for(var j =0; j< 4; j++){
      
      var input = document.createElement('input')
      input.setAttribute('type','radio')
      input.setAttribute('name',`gloomy+${i}`) // 구분안하면 전 항목이 묶이게 됨.. 
      input.setAttribute('value',values[j])
      input.classList.add('gloomy')
      input.style.marginRight = '20px'
      var label = document.createElement('label')
      label.innerHTML += answers[j]
      surveyForm.appendChild(label)
      surveyForm.appendChild(input)
    }          
  }
  var submitArea = document.createElement('div')
  submitArea.style.textAlign='center'
  submitArea.style.margin='20px'
  var submit = document.createElement('button')

  submit.onclick = function check_Gloomy(){
    var total = 0
    for(var k =0; k < questions.length; k++){
      var radioBtn = document.getElementsByName(`gloomy+${k}`)
      for(var l = 0; l < radioBtn.length; l++){
        if(radioBtn[l].checked==true){
          total += parseInt(radioBtn[l].value)
        }
      }
    }
    if(total<=60 && total >45) alert(`우울증 점수는 ${total}점 입니다.\n가까운 정신과에 내원하시는 것을 추천드립니다.`) 
    else if(total<=45 && total >30) alert(`우울증 점수는 ${total}점 입니다.\n생활에 좀 더 긍정적인 마인드로 임하시고, 안정을 취하는 것을 추천드립니다.`) 
    else alert(`우울증 점수는 ${total}점 입니다.\n별다른 문제는 없으시고 앞으로도 건강한 마음으로 생활하세요!`) 
  }
  submit.innerHTML = '제출'
  submitArea.appendChild(submit)
  surveyForm.appendChild(submitArea)
}