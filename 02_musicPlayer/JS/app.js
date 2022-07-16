document.addEventListener("DOMContentLoaded", () => {
  changePg();
  search();
  playOption();
  heart();
  controller1();
  controller2();
});

function changePg() {
  var first = document.getElementById('page1');
  var second = document.getElementById('page2');
  var button1 = document.querySelector('#changebtn1');
  var button2 = document.querySelector('#changebtn2');

  button1.addEventListener('click',function(){
    /* addEventListener issue로 인해 script(app.js)위치를 body 최하단으로 이동 */
      first.style.display = 'none';
      second.style.display = 'block';
    }
  )
  button2.addEventListener('click',function(){
    /* addEventListener issue로 인해 script(app.js)위치를 body 최하단으로 이동 */
      first.style.display = 'block';
      second.style.display = 'none';
    }
  )
}

function search() {
  var input = document.querySelector('#input');
  var search = document.querySelector('.search');
  var header = document.querySelector('#header');
  var changebtn = document.querySelector('#changebtn1');

  search.addEventListener('click',function(){
    header.classList.toggle('searchMode')
    if(input.style.display == 'none'){
      input.style.display = 'block';
      changebtn.style.display = 'none';
    } else{
      input.style.display = 'none';
      changebtn.style.display = 'inline-block';
    }      
  })
}

function playOption() {
  var option = document.querySelectorAll('.option');

  option[0].addEventListener('click',function(){ /*foreach를 쓰지 않을 경우 배열의 순서를 꼭 적어줘야함! */
    option[0].style['display'] = 'none';
    option[1].style['display'] = 'inline';
  })
  option[1].addEventListener('click',function(){ 
    option[1].style['display'] = 'none';
    option[2].style['display'] = 'inline';
  })
  option[2].addEventListener('click',function(){ 
    option[2].style['display'] = 'none';
    option[0].style['display'] = 'inline';
  })
}

function heart() {
  var heart = document.querySelector('#heart');
  var heartNum = document.querySelector('#heartNum');
  var icon = document.querySelector('.fa-heart');
  heartInt0 = parseInt(heartNum.innerText); // 좋아요 한번만 누르기 위한 조건용.
  heartInt1 = parseInt(heartNum.innerText);
  heart.addEventListener('click',function(){
    if(heartInt0 >= heartInt1){
      heartInt1 += 1;
      heartNum.innerText = heartInt1;
      /*
      if(heartInt1 >= 1000 && heartInt1 < 1000000){
        heartNum.innerText = Math.round(heartInt1/1000).toFixed(2); 
        heartNum.innerText += 'K'
      } else {
        heartNum.innerText = Math.round(heartInt1/1000000).toFixed(2); 
        heartNum.innerText += 'M'
      }
      */
      icon.classList.add('heartEffection');
    }
  })
}

function controller1() {
  var play1 = document.querySelectorAll('.play1');
  play1[0].addEventListener('click', function(){
    play1[0].style['display'] = 'none';
    play1[1].style['display'] = 'inline-block';
  })
  play1[1].addEventListener('click', function(){
    play1[1].style['display'] = 'none';
    play1[0].style['display'] = 'inline-block';
  })
}

function controller2() {
  var play2 = document.querySelectorAll('.play2');
  play2[0].addEventListener('click', function(){
    play2[0].style['display'] = 'none';
    play2[1].style['display'] = 'inline-block';
  })
  play2[1].addEventListener('click', function(){
    play2[1].style['display'] = 'none';
    play2[0].style['display'] = 'inline-block';
  })
}