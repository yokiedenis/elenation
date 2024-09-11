// i slipt the js omponents to different parts so that incase of an error,
//  its easy to locate and it is localised to on page 
// sidebar js starts
const sideBarToggle = document.getElementById("icon4");
sideBarToggle.addEventListener("click", sideBar);
const logo = document.getElementById("logo");
const sideBarToggler = document.getElementById("icon4");


//sidebar x button, when clicked we remove
function closeToggle() {
  const toggledContent = document.getElementById("sideBar");
  toggledContent.remove();
}


//we create the sidebar dynamically through js 
function sideBar() {
  const body = document.getElementById("body");
  const sideBarElement = document.createElement("div");
  sideBarElement.className = "sideBar";
  sideBarElement.id = "sideBar";
  sideBarElement.innerHTML = `<div id="topElement">
  <div id="profile"></div>
  <i onclick="closeToggle()" class="fa-solid fa-xmark fa-beat-fade fa-xl" style="color: #34b9be;"></i>

   
 </div>
 <a href="./index.html">Home</a>
 <a href="./program.html">Resources</a>
 <a href="./events.html">Events</a>
 <a href="./gallery.html">Gallery</a>
 <a href="./blogIndex.html">Blog</a>
 <a href="#">FAQs</a>
 `;
  body.appendChild(sideBarElement);
}
// sidebar js ends