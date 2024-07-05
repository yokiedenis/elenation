let themeSwitchButton = document.getElementById("themeSwitch")
// themeSwitchButton.addEventListener("click",function(){
    
//     document.querySelector("a").classList.toggle("color")
// })
// search feature to search within page
// function search(){
//     var searchText=$("#searchText").val();
//     $(".searchText:contains('"+searchText+"')").css("background","red")
// }


const sideBarToggle = document.getElementById("icon4");
sideBarToggle.addEventListener("click", sideBar);
const logo = document.getElementById("logo");
const sideBarToggler = document.getElementById("icon4");

function closeToggle() {
  const toggledContent = document.getElementById("sideBar");
  toggledContent.remove();
}

function sideBar() {
  const body = document.getElementById("body");
  const sideBarElement = document.createElement("div");
  sideBarElement.className = "sideBar";
  sideBarElement.id = "sideBar";
  sideBarElement.innerHTML = `<div id="topElement">
   <i onclick="closeToggle()" class="fa-solid fa-xmark fa-beat-fade fa-xl" style="color: #34b9be;"></i>

   <div id="profile"></div>
 </div>
 <a href="#">Home</a>
 <a href="#">Resources</a>
 <a href="#">Programs</a>
 <a href="#">Gallery</a>
 <a href="#">Blog</a>
 <a href="#">FAQs</a>
 `;
  body.appendChild(sideBarElement);
}

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
    flag = false;
  }
})

