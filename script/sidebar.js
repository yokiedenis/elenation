
// sidebar js starts
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