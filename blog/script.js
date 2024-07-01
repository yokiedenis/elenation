let themeSwitchButton = document.getElementById("switcher")
themeSwitchButton.addEventListener("click",function(){
    document.body.classList.toggle("color");
    document.getElementById("a").classList.toggle("color")
})
