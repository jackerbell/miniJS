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
//progressBar()



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
    songIndex--;
    if(songIndex < 0) {
      songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex])
    musicPlay()
  })
  nextBtn1.addEventListener('click', function () {
    songIndex++;
    if(songIndex > songs.length-1) {
      songIndex = 0;
    }
    loadSong(songs[songIndex])
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
    songIndex--;
    if(songIndex < 0) {
      songIndex = songs.length - 1;
    }
    loadSong(songIndex);
    loadSong(songs[songIndex])
    musicPlay()
  })

  nextBtn2.addEventListener('click', function () {
    songIndex++;
    if(songIndex > songs.length-1) {
      songIndex = 0;
    }
    loadSong(songIndex);
    loadSong(songs[songIndex])
    musicPlay()
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
    audio.play()
    var interval = setInterval(progressTime,1000,songs[songIndex])
    var interval2 = setInterval(progressBar,1000,songs[songIndex])
    /* 첫번째는 반복이 되는데 두번째는 반복이 안되고 한 번만 실행됨.. */
  }    
  else{
    audio.pause()
    clearInterval(interval)
    /*사용법이 잘못되었는지 수업에서 봤었던 예시를 봐도 이해가 되지 않음.. */
    clearInterval(interval2)
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
    runTime.innerHTML = '0:00'
  }
}

function progressBar(song) {
  
  var plusWidth = (Math.round(376/song.runtime*100)/100).toFixed(2)
  console.log(plusWidth)
  progressB.style.width += plusWidth +'px';
  /*길이가 한 번늘어나고 이후에는 고정 */
}
