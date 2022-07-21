document.addEventListener("DOMContentLoaded", () => {
  changePg();
  search();
  playOption();
  like();
  controller1();
  controller2();
  loadSong(songs[songIndex])
});

const first = document.getElementById('page1');
const second = document.getElementById('page2');
const button1 = document.querySelector('#changebtn1');
const button2 = document.querySelector('#changebtn2');
//most function

const input = document.querySelector('#input');
const searchMode = document.querySelector('.search');
const header = document.querySelector('#header');
// search()

const option = document.querySelectorAll('.option');
//playOption()

const heart = document.querySelector('#heart');
const heartNum = document.querySelector('#heartNum');
const icon = document.querySelector('.fa-heart');
// heart()

const play1 = document.querySelectorAll('.play1');
const play2 = document.querySelectorAll('.play2');
const prevBtn1 = document.querySelector('.prev1');
const nextBtn1 = document.querySelector('.next1');
const prevBtn2 = document.querySelector('.prev2');
const nextBtn2 = document.querySelector('.next2');
// controller1(), controller2() 

const playList_Song = document.querySelectorAll('.playList__song')
// 재생 중인 곡 표시

let songIndex = 0;
const songs = [
  {
    name: 'Beliver', artist: 'Imagine Dragon', genre: 'Pop_Rock', runtime: 202
  },
  {
    name: 'Usseewa', artist: 'Ado', genre: 'J_Pop', runtime: 202
  },
  {
    name: 'LOVEDIVE', artist: 'IVE', genre: 'K_Pop', runtime: 186
  },
  {
    name: 'Left and Right', artist: 'Charlie puth', genre: 'Pop', runtime: 159
  }
]
//musicPlay()

const audio = document.querySelector('audio')
const songName = document.querySelectorAll('.songName')
const artistName = document.querySelectorAll('.artistName')
const genre = document.querySelector('#genre')
const cover = document.querySelectorAll('.cover')
//loadSong()

const runTime = document.querySelector('#runTime')
const endTime = document.querySelector('#endTime')
var seco = 0;
var sect = 0;
var min = 0;
// 재생시간 표시

const progressB = document.querySelector('#progressBar')
var barWidth = 0;
var interval = null;
var interval2 = null; /* setinterval clearInterval 쓸시 전역으로처리 및 null 초기화 필수  */
//progressBar(), progressTime()



function changePg() {
  button1.addEventListener('click', function () {
    /* addEventListener issue로 인해 script(app.js)위치를 body 최하단으로 이동 */
    first.style.display = 'none';
    second.style.display = 'block';
  }
  )
  button2.addEventListener('click', function () {
    /* addEventListener issue로 인해 script(app.js)위치를 body 최하단으로 이동 */
    first.style.display = 'block';
    second.style.display = 'none';
  }
  )
}

function search() {
  searchMode.addEventListener('click', function () {
    header.classList.toggle('searchMode')
    if (input.style.display == 'none') {
      input.style.display = 'block';
      button1.style.display = 'none';
    } else {
      input.style.display = 'none';
      button1.style.display = 'inline-block';
    }
  })
}

function playOption() {

  option[0].addEventListener('click', function () { /*foreach를 쓰지 않을 경우 배열의 순서를 꼭 적어줘야함! */
    option[0].style['display'] = 'none';
    option[1].style['display'] = 'inline'; //repeat   
  })
  option[1].addEventListener('click', function () {
    option[1].style['display'] = 'none';
    option[2].style['display'] = 'inline'; // repeat 1
    songIndex = songIndex;
  })
  option[2].addEventListener('click', function () {
    option[2].style['display'] = 'none';
    option[3].style['display'] = 'inline'; // shuffle
  })
  option[3].addEventListener('click', function () {
    option[3].style['display'] = 'none';
    option[0].style['display'] = 'inline'; // onetime
  })
}

function like() {
  heartInt0 = parseInt(heartNum.innerText); // 좋아요 한번만 누르기 위한 조건용.
  heartInt1 = parseInt(heartNum.innerText);
  heart.addEventListener('click', function () {
    if (heartInt0 >= heartInt1) {
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
  play1[0].addEventListener('click', function () {
    play1[0].style['display'] = 'none';
    play1[1].style['display'] = 'inline-block';
    play2[0].style['display'] = 'none';
    play2[1].style['display'] = 'inline-block';
    musicPlay();
  })
  prevBtn1.addEventListener('click', function () {
    seco = 0;
    sect = 0;
    min = 0;
    progressB.style.width = 0;
    total_width = 0;
    if(option[1].style['display'] == 'none' && option[2].style['display'] == 'inline'){
      songIndex = songIndex;
    }else if(option[2].style['display'] == 'none' && option[3].style['display'] == 'inline'){
      songIndex = Math.ceil((Math.random()*3))
      console.log(songIndex)
    }else if(option[0].style['display'] == 'none' && option[1].style['display'] == 'inline'){
      songIndex--;
      if(songIndex < 0){
        songIndex = songs.length - 1;
      }
    }else {
      songIndex--;
      if(songIndex < 0) {
        songIndex = songs.length - 1;
      }
    }
    loadSong(songs[songIndex])
    clearInterval(interval)
    clearInterval(interval2)
    musicPlay()
  })
  nextBtn1.addEventListener('click', function () {
    seco = 0;
    sect = 0;
    min = 0;
    progressB.style.width = 0;
    total_width = 0;
    if(option[1].style['display'] == 'none' && option[2].style['display'] == 'inline'){
      songIndex = songIndex;
    }else if(option[2].style['display'] == 'none' && option[3].style['display'] == 'inline'){
      songIndex = Math.ceil((Math.random()*3))
      console.log(songIndex)
    }else if(option[0].style['display'] == 'none' && option[1].style['display'] == 'inline'){
      songIndex++;
      if(songIndex > 3){
        songIndex = 0;
      }
    }else {
      songIndex++;
      if(songIndex > songs.length-1) {
        songIndex = 0;
      }
    }
    loadSong(songs[songIndex])
    clearInterval(interval)
    clearInterval(interval2)
    musicPlay()
  })
  play1[1].addEventListener('click', function () {
    play1[1].style['display'] = 'none';
    play1[0].style['display'] = 'inline-block';
    play2[1].style['display'] = 'none';
    play2[0].style['display'] = 'inline-block';
    musicPlay()
  })
}

function controller2() {
  play2[0].addEventListener('click', function () {
    play1[0].style['display'] = 'none';
    play1[1].style['display'] = 'inline-block';
    play2[0].style['display'] = 'none';
    play2[1].style['display'] = 'inline-block';
    musicPlay();
  })

  prevBtn2.addEventListener('click', function () {
    seco = 0;
    sect = 0;
    min = 0;
    progressB.style.width = 0;
    total_width = 0;
    if(option[1].style['display'] == 'none' && option[2].style['display'] == 'inline'){
      songIndex = songIndex;
    }else if(option[2].style['display'] == 'none' && option[3].style['display'] == 'inline'){
      songIndex = Math.ceil((Math.random()*3))
      console.log(songIndex)
    }else if(option[0].style['display'] == 'none' && option[1].style['display'] == 'inline'){
      songIndex--;
      if(songIndex < 0){
        songIndex = songs.length - 1;
      }
    }else {
      songIndex--;
      if(songIndex < 0) {
        songIndex = songs.length - 1;
      }
    }
    loadSong(songs[songIndex])
    clearInterval(interval)
    clearInterval(interval2)
    musicPlay();
  })

  nextBtn2.addEventListener('click', function () {
    seco = 0;
    sect = 0;
    min = 0;
    progressB.style.width = 0;
    total_width = 0;
    if(option[1].style['display'] == 'none' && option[2].style['display'] == 'inline'){
      songIndex = songIndex;
    }else if(option[2].style['display'] == 'none' && option[3].style['display'] == 'inline'){
      songIndex = Math.ceil((Math.random()*3))
      console.log(songIndex)
    }else if(option[0].style['display'] == 'none' && option[1].style['display'] == 'inline'){
      songIndex++;
      if(songIndex > songs.length - 1){
        songIndex = 0;
      }
    }else{
      songIndex++;
      if(songIndex > songs.length - 1) {
        songIndex = 0;
      }
    }
    loadSong(songs[songIndex])
    clearInterval(interval)
    clearInterval(interval2)
    musicPlay();
  })

  play2[1].addEventListener('click', function () {
    play1[1].style['display'] = 'none';
    play1[0].style['display'] = 'inline-block';
    play2[1].style['display'] = 'none';
    play2[0].style['display'] = 'inline-block';
    musicPlay();
  })
}

function loadSong(song) {
  audio.src = `../AUDIO/${song.name}.mp3`
  cover[0].src = `../IMG/${song.name}.jpg`
  cover[1].src = `../IMG/${song.name}.jpg`
  songName[0].innerHTML = `<b>${song.name}</b>`
  songName[1].innerHTML = `<b>${song.name}</b>`
  songName[2].innerHTML = `<b>${song.name}</b>`
  artistName[0].innerHTML = `<b>${song.artist}</b>`
  artistName[1].innerHTML = `<b>${song.artist}</b>`
  genre.innerHTML = `<b>${song.genre}</b>`
  runTime.innerHTML = `0:00`
  endTime.innerHTML =`${Math.floor(song.runtime/60)}:${Math.floor(song.runtime%60/10)}${song.runtime%10}`
}

function musicPlay() {
  if(play2[1].style['display'] == 'inline-block' && play1[1].style['display'] == 'inline-block'){
    playList_Song.forEach(function(ele){
      if(ele.id == songs[songIndex].name){
        ele.classList.add('borderEffectionPlay')
        ele.classList.remove('borderEffectionPause')
      }else{
        ele.classList.remove('borderEffectionPlay')
        ele.classList.remove('borderEffectionPause')
      } 
    })
    interval = setInterval(progressTime,1000,songs[songIndex])
    interval2 = setInterval(progressBar,1000,songs[songIndex])
    audio.play()
  }    
  else{
    playList_Song.forEach(function(ele){
      if(ele.id == songs[songIndex].name){
        ele.classList.add('borderEffectionPause')
        ele.classList.remove('borderEffectionPlay')
      }else {
        ele.classList.remove('borderEffectionPlay')
        ele.classList.remove('borderEffectionPause')
      } 
    })
    clearInterval(interval)
    clearInterval(interval2)
    audio.pause()
  } 
}

function progressTime(song) {
  runTime.innerHTML =`${min}:${sect}${seco++}`
  if(seco>9){
    seco = 0;
    sect ++;
    if(sect>5){
      sect = 0;
      min ++;
    }
  }
  var allRunTime = min*60 + sect*10 + seco;
  if(allRunTime > song.runtime) {
    runTime.innerHTML = '0:00';// 재생시간 다 된 후 그 다음 재생옵션 정하기.
    progressB.style.width = 0;
    total_width=0;
    if(runTime.innerHTML == '0:00'){
      if(option[2].style['display'] == 'none' && option[3].style['display'] == 'inline'){
        songIndex = songIndex;
        seco = 0;
        sect = 0;
        min = 0;
        runTime.innerHTML =`${min}:${sect}${seco++}`
        if(seco>9){
          seco = 0;
          sect ++;
          if(sect>5){
            sect = 0;
            min ++;
          }
        }
      }else if(option[2].style['display'] == 'none' && option[3].style['display'] == 'inline'){
        songIndex = Math.ceil((Math.random()*3))
        console.log(songIndex)
        seco = 0;
        sect = 0;
        min = 0;
        runTime.innerHTML =`${min}:${sect}${seco++}`
        if(seco>9){
          seco = 0;
          sect ++;
          if(sect>5){
            sect = 0;
            min ++;
          }
        }
      }else if(option[0].style['display'] == 'none' && option[1].style['display'] == 'inline'){
        songIndex++
        if(songIndex > 3){
          songIndex = 0;
        }
        seco = 0;
        sect = 0;
        min = 0;
        runTime.innerHTML =`${min}:${sect}${seco++}`
        if(seco>9){
          seco = 0;
          sect ++;
          if(sect>5){
            sect = 0;
            min ++;
          }
        }
      }else {
        play1[1].style['display'] = 'none';
        play1[0].style['display'] = 'inline-block';
        play2[1].style['display'] = 'none';
        play2[0].style['display'] = 'inline-block';
        songIndex++
        if(songIndex > 3){
          songIndex = 0;
        }
        seco = 0;
        sect = 0;
        min = 0;
        runTime.innerHTML =`${min}:${sect}${seco++}`
        if(seco>9){
          seco = 0;
          sect ++;
          if(sect>5){
            sect = 0;
            min ++;
          }
        }
      }
    }
  }
}

var total_width = 0;
function progressBar(song) {
  var plusWidth = (Math.round(376/song.runtime*100)/100).toFixed(2)
  total_width = total_width + parseFloat(plusWidth)
  progressB.style.width = total_width +'px';
  /*길이가 한 번늘어나고 이후에는 고정 
    데이터 타입?? parseFloat?? 
  */
}

audio.addEventListener('ended',function(){
  progressTime(songs[songIndex])
  progressBar(songs[songIndex])
  loadSong(songs[songIndex]) /* 위에서 index 규칙대로 정한 후 적용.. 순서중요!!!! */
})
