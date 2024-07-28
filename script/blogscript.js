
let btnOne = document.getElementById("btn");
let msg = document.getElementById("msg");
let itms = document.getElementsByClassName("temz");
let snd = document.getElementById("sendmsg");
let close = document.getElementById("plus");
let dialogText = document.getElementsByClassName("mss");
let effct = document.querySelector(".effect");
btnOne.addEventListener("click", function() {
  btnOne.classList.toggle("move");
  msg.classList.toggle("resize");
  snd.classList.toggle("send");
  close.classList.toggle("one-move");
  effct.classList.toggle("effectshow");
  for (let i = 0; i <= dialogText.length; i++) {
    // dialogText[i].classList.toggle("mss-show");
    itms[i].classList.toggle("itmshow");
  }
});

/* search bar */
document.querySelector(".circle").addEventListener("click", () => {
  for (let i = 0; i <= 3; i++) {
    document
      .getElementsByClassName("nav-items")
      [i].classList.remove("show-menu");
    document
      .getElementsByClassName("box-line")
      [i].classList.remove("box-line-show");
  }
  document.querySelector(".box").classList.remove("box-show");
  document.querySelector(".add").classList.toggle("go");
  document.querySelector(".search").classList.toggle("search-focus");
  document.querySelector(".search").focus();
  document.querySelector(".circle").classList.toggle("color");
  document.querySelector(".line1").classList.toggle("move");
  document.querySelector(".line2").classList.toggle("mov");
  document.querySelector(".effect").classList.toggle("big");
});
/* menu */
document.querySelector(".menu").addEventListener("click", () => {
  for (let i = 0; i <= 3; i++) {
    document.querySelector(".box").classList.remove("box-show");
    document
      .getElementsByClassName("nav-items")
      [i].classList.toggle("show-menu");
    document
      .getElementsByClassName("box-line")
      [i].classList.remove("box-line-show");
  }
});
/* box */
document.querySelector(".gallery").addEventListener("click", () => {
  document.querySelector(".box").classList.toggle("box-show");
  for (let i = 0; i <= 3; i++) {
    document
      .getElementsByClassName("box-line")
      [i].classList.toggle("box-line-show");
    document
      .getElementsByClassName("nav-items")
      [i].classList.remove("show-menu");
  }
}); 
