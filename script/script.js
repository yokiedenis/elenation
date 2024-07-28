let themeSwitchButton = document.getElementById("themeSwitch")
// themeSwitchButton.addEventListener("click",function(){
    
//     document.querySelector("a").classList.toggle("color")
// })
// search feature to search within page
// function search(){
//     var searchText=$("#searchText").val();
//     $(".searchText:contains('"+searchText+"')").css("background","red")
// }

// theme switch js ends here
// js to expand image onclick
let prodImageScaleOnClick = document.querySelectorAll(".prodImg");
prodImageScaleOnClick.forEach(element => {
  element.addEventListener("click", () => {
    element.classList.toggle("prodImgScale");
  });
});

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

// let data = [
//   {
//     name: "Veggie Delight",
//     imageSrc: "https://source.unsplash.com/random?veggies",
//     time: "30 min",
//     type: "veg",
//     isLiked: false,
//     rating: 4.2,
//   },
//   {
//     name: "Chicken Grill",
//     imageSrc: "https://source.unsplash.com/random?chicken",
//     time: "45 min",
//     type: "non-veg",
//     isLiked: false,
//     rating: 4.5,
//   },
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

// window.alert("open with microsoft edge")
// //searh function
// function filterDataOnInputChange() {
//   clearBody();
//   const searchTerm = document.getElementById("search").value.toLowerCase();
//   const filteredData = data.filter((dataItem) =>
//     dataItem.name.toLowerCase().includes(searchTerm)
//   );
//   displayData(filteredData);
// }
// document
//   .getElementById("search")
//   .addEventListener("input", filterDataOnInputChange);

// //display data function
// const mainBody = document.getElementById("mainBody");
// const allRecipes = document.getElementById("allRecipes");
// allRecipes.addEventListener("click", displayDataAll);

// function displayData(data) {
//   for (let i = 0; i < data.length; i++) {
//     let card = document.createElement("div");
//     card.className = "card";
//     card.id = "card";
//     card.innerHTML = `   <div
//         class="cardImage"
//         style="
//           background-image: url(${data[i].imageSrc});
//           background-repeat: no-repeat;
//           background-size: cover;
//         "
//       ></div>
//       <span class="cardType">${data[i].type}</span>
//       <p class="cardName">${data[i].name}</p>
//       <div class="cardFooter">
//           <p>${data[i].time}</p>
//           <div style="display:flex;align-items:center;">
//             <img src="like.png" alt="like" loading="lazy" />
//             <svg
//                 style="margin:0px 5px;"
//               xmlns="http://www.w3.org/2000/svg"
//               width="22"
//               height="22"
//               viewBox="0 0 22 22"
//               fill="none"
//             >
//               <g clip-path="url(#clip0_3238_140)">
//                 <path
//                   d="M18.9347 15.5907C20.0485 13.6639 20.4228 11.3976 19.9877 9.21499C19.5526 7.03241 18.3377 5.08289 16.5701 3.73063C14.8025 2.37837 12.6031 1.71587 10.3827 1.86689C8.16225 2.01791 6.07277 2.97212 4.50454 4.55127C2.93632 6.13041 1.99663 8.22647 1.86103 10.4479C1.72542 12.6693 2.40317 14.8641 3.76766 16.6222C5.13215 18.3804 7.09006 19.5817 9.27561 20.0017C11.4612 20.4217 13.7249 20.0316 15.6438 18.9044L20.1667 20.1667L18.9347 15.5907Z"
//                   stroke="#252525"
//                   stroke-width="2"
//                   stroke-linejoin="round"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_3238_140">
//                   <rect width="22" height="22" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </div>
//         </div>`;
//     mainBody.appendChild(card);
//   }
// }

// displayData(data);

// //clearing the current data on display
// function clearBody() {
//   mainBody.innerHTML = ``;
// }

// //display all recipes
// function displayDataAll() {
//   clearBody();
//   for (let i = 0; i < data.length; i++) {
//     let card = document.createElement("div");
//     card.className = "card";
//     card.id = "card";
//     card.innerHTML = `   <div
//       class="cardImage"
//       style="
//         background-image: url(${data[i].imageSrc});
//         background-repeat: no-repeat;
//         background-size: cover;
//       "
//     ></div>
//     <span class="cardType">${data[i].type}</span>
//     <p class="cardName">${data[i].name}</p>
//     <div class="cardFooter">
//         <p>${data[i].time}</p>
//         <div style="display:flex;align-items:center;">
//           <img src="like.png" alt="like" loading="lazy" />
//           <svg
//               style="margin:0px 5px;"
//             xmlns="http://www.w3.org/2000/svg"
//             width="22"
//             height="22"
//             viewBox="0 0 22 22"
//             fill="none"
//           >
//             <g clip-path="url(#clip0_3238_140)">
//               <path
//                 d="M18.9347 15.5907C20.0485 13.6639 20.4228 11.3976 19.9877 9.21499C19.5526 7.03241 18.3377 5.08289 16.5701 3.73063C14.8025 2.37837 12.6031 1.71587 10.3827 1.86689C8.16225 2.01791 6.07277 2.97212 4.50454 4.55127C2.93632 6.13041 1.99663 8.22647 1.86103 10.4479C1.72542 12.6693 2.40317 14.8641 3.76766 16.6222C5.13215 18.3804 7.09006 19.5817 9.27561 20.0017C11.4612 20.4217 13.7249 20.0316 15.6438 18.9044L20.1667 20.1667L18.9347 15.5907Z"
//                 stroke="#252525"
//                 stroke-width="2"
//                 stroke-linejoin="round"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0_3238_140">
//                 <rect width="22" height="22" fill="white" />
//               </clipPath>
//             </defs>
//           </svg>
//         </div>
//       </div>`;
//     mainBody.appendChild(card);
//   }
// }

// //veg only filter
// const vegOnly = document.getElementById("vegOnly");
// vegOnly.addEventListener("click", showOnlyVeg);
// function showOnlyVeg() {
//   let onlyVeg = data.filter((dataElement) => dataElement.type == "veg");
//   clearBody();
//   displayData(onlyVeg);
// }

// //none veggie filter
// const noneVeg = document.getElementById("noneVeg");
// noneVeg.addEventListener("click", showNoneVeg);
// function showNoneVeg() {
//   let noneVeggie = data.filter((dataElement) => dataElement.type == "non-veg");
//   clearBody();
//   displayData(noneVeggie);
// }

// //show by rating functions
// const radio1 = document.getElementById("above");
// const radio2 = document.getElementById("below");
// function aboveRating(event) {
//   if (event.value) {
//     let ratingStats = data.filter((dataElement) => dataElement.rating > 3.9);
//     clearBody();
//     console.log(ratingStats);
//     displayData(ratingStats);
//   }
// }
// function belowRating(event) {
//   if (event.value) {
//     let ratingStats2 = data.filter((dataElement) => dataElement.rating < 4);
//     clearBody();
//     displayData(ratingStats2);
//   }
// }