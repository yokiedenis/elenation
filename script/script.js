// i slipt the js omponents to different parts so that incase of an error,
//  its easy to locate and it is localised to on page 


//this increase image size on click, could have used hover but hover messes 
//on laptop screens
let prodImageScaleOnClick = document.querySelectorAll(".prodImg");
prodImageScaleOnClick.forEach(element => {
  element.addEventListener("click", () => {
    element.classList.toggle("prodImgScale");
  });
});
//end of image resize on click

//form js code
document.addEventListener("DOMContentLoaded", function() {
  captchaCode();

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    var captchaVal = document.getElementById("captcha").textContent;
    var captchaCode = document.querySelector(".captcha").value;
    if (captchaVal!== captchaCode) {
      document.querySelector(".captcha").style.color = "#CE3B46";
      event.preventDefault(); // prevent submission if captcha is invalid
    } else {
      document.querySelector(".captcha").style.color = "#609D29";
    }
    
    var emailFilter = /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var emailText = document.querySelector(".email").value;
    if (emailFilter.test(emailText)) {
      document.querySelector(".email").style.color = "#609D29";
    } else {
      document.querySelector(".email").style.color = "#CE3B46";
    }
    
    var nameFilter = /^([a-zA-Z \t]{3,15})+$/;
    var nameText = document.querySelector(".name").value;
    if (nameFilter.test(nameText)) {
      document.querySelector(".name").style.color = "#609D29";
    } else {
      document.querySelector(".name").style.color = "#CE3B46";
    }
    
    var messageText = document.querySelector(".message").value.length;
    if (messageText > 10) {
      document.querySelector(".message").style.color = "#609D29";
    } else {
      document.querySelector(".message").style.color = "#CE3B46";
    }
    
    if ((captchaVal!== captchaCode) || (!emailFilter.test(emailText)) || (!nameFilter.test(nameText)) || (messageText <= 10)) {
      event.preventDefault(); // prevent submission if any validation fails
    } else {
      sendMessage();
    }
  });
});

function captchaCode() {
  var captcha = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < 4; i++) {
    captcha += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  document.getElementById("captcha").textContent = captcha;
}

//send message after form submission in js
function sendMessage() {
  document.getElementById("contactForm").style.display = "none";
  var messageElement = document.createElement("h2");
  messageElement.textContent = "Message sent!";
  document.getElementById("form").appendChild(messageElement);
}

//meet the team section js starts hereconst cardControllers = document.querySelectorAll("[data-card-controller]");
let cardControllers = document.querySelectorAll("[data-card-controller]");
cardControllers.forEach(controller => {
  controller.addEventListener("click", (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const isVisible = card.getAttribute("data-visible") === "true";
    card.setAttribute("data-visible", isVisible ? "false" : "true");
  });
});
//meet the team section ends here

let data = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
    Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut inventore sed? Dolores atque dolorem sequi obcaecati sit, iusto nobis."
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
    Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut inventore sed? Dolores atque dolorem sequi obcaecati sit, iusto nobis."
  },]
//   {
//     name: "Cheese Pizza",
//     imageSrc: "https://source.unsplash.com/random?pizza",
//     time: "40 min",
//     type: "veg",
//     isLiked: false,
//     rating: 4.1,
//   },
//   {
//     name: "Steak",
//     imageSrc: "https://source.unsplash.com/random?steak",
//     time: "60 min",
//     type: "non-veg",
//     isLiked: false,
//     rating: 4.7,
//   },
//   {
//     name: "Grilled Salmon",
//     imageSrc: "https://source.unsplash.com/random?salmon",
//     time: "50 min",
//     type: "non-veg",
//     isLiked: false,
//     rating: 4.6,
//   },
//   {
//     name: "Tomato Pasta",
//     imageSrc: "https://source.unsplash.com/random?pasta",
//     time: "35 min",
//     type: "veg",
//     isLiked: false,
//     rating: 4.0,
//   },
//   {
//     name: "Vegan Salad",
//     imageSrc: "https://source.unsplash.com/random?salad",
//     time: "20 min",
//     type: "veg",
//     isLiked: false,
//     rating: 3.9,
//   },
//   {
//     name: "Fried Chicken",
//     imageSrc: "https://source.unsplash.com/random?friedChicken",
//     time: "55 min",
//     type: "non-veg",
//     isLiked: false,
//     rating: 4.3,
//   },
//   {
//     name: "Mushroom Risotto",
//     imageSrc: "https://source.unsplash.com/random?risotto",
//     time: "45 min",
//     type: "veg",
//     isLiked: false,
//     rating: 4.5,
//   },
//   {
//     name: "Burger",
//     imageSrc: "https://source.unsplash.com/random?burger",
//     time: "30 min",
//     type: "non-veg",
//     isLiked: false,
//     rating: 4.2,
//   },
//   {
//     name: "Paneer Tikka",
//     imageSrc: "https://source.unsplash.com/random?paneerTikka",
//     time: "40 min",
//     type: "veg",
//     isLiked: false,
//     rating: 4.4,
//   },
//   {
//     name: "BBQ Ribs",
//     imageSrc: "https://source.unsplash.com/random?ribs",
//     time: "70 min",
//     type: "non-veg",
//     isLiked: false,
//     rating: 4.6,
//   },
//   {
//     name: "Caesar Salad",
//     imageSrc: "https://source.unsplash.com/random?caesarSalad",
//     time: "25 min",
//     type: "veg",
//     isLiked: false,
//     rating: 3.8,
//   },
//   {
//     name: "Fish Tacos",
//     imageSrc: "https://source.unsplash.com/random?fishTacos",
//     time: "35 min",
//     type: "non-veg",
//     isLiked: false,
//     rating: 4.3,
//   },
//   {
//     name: "Chocolate Cake",
//     imageSrc: "https://source.unsplash.com/random?chocolateCake",
//     time: "90 min",
//     type: "veg",
//     isLiked: false,
//     rating: 4.9,
//   },
// ];
