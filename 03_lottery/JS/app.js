document.addEventListener("DOMContentLoaded", function(){

 });


const slot = document.getElementById('slot');
  slot.addEventListener('click', function () {
    slot.animate([
      {transform: 'rotate(0deg)'},
      {transform: 'rotate(-90deg)'},
      {transform: 'rotate(0deg)'}
    ],{
      duration:1000
    }) 
  }
  )
