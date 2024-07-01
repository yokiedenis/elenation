let themeSwitchButton = document.getElementById("themeSwitch")
themeSwitchButton.addEventListener("click",function(){
    document.body.classList.toggle("color");
    document.querySelector("a").classList.toggle("color")
})
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



