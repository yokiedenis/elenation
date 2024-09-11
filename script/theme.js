// i slipt the js omponents to different parts so that incase of an error,
//  its easy to locate and it is localised to on page 

// theme switch js starts here
let wr = document.querySelector('.wrapper');
let bg = document.querySelector('.background');
let bg2 = document.querySelector('.background-2');
let sun = document.querySelector('.sun');
let circles = document.querySelectorAll('.sun-circle');
let spots = document.querySelectorAll('.sun-spot');

let flag = false;
wr.addEventListener('click', () => {
  if(flag == false)
  {
    bg.classList.add('background_active');
    wr.classList.add('wrapper_active');
    sun.classList.add('sun_active');
    document.body.classList.toggle("color");
    circles[0].classList.add('sun-circle_active');
    circles[1].classList.add('sun-circle-two_active');
    circles[2].classList.add('sun-circle-three_active');
    bg2.classList.add('background-2_active');
    spots.forEach((item) => {item.classList.add('sun-spot_active')})
   flag = true;
  }
  else{
    bg.classList.remove('background_active');
    wr.classList.remove('wrapper_active');
    sun.classList.remove('sun_active');
    document.body.classList.toggle("color");
    circles[0].classList.remove('sun-circle_active');
    circles[1].classList.remove('sun-circle-two_active');
    circles[2].classList.remove('sun-circle-three_active');
    bg2.classList.remove('background-2_active');
    spots.forEach((item) => {item.classList.remove('sun-spot_active')})
    flag = false;
  }
})