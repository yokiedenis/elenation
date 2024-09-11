// i slipt the js omponents to different parts so that incase of an error,
//  its easy to locate and it is localised to on page 


// this is js for categories on blog page

//first using DOM we give variable to elements we want to work with 
let btnOne = document.getElementById("btn");
let msg = document.getElementById("msg");
let itms = document.getElementsByClassName("temz");
let snd = document.getElementById("sendmsg");
let close = document.getElementById("plus");
let dialogText = document.getElementsByClassName("mss");
let effct = document.querySelector(".effect");
//add an event listener of click with a function in it 
//the function adds a class if it their and removes it if its not there
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

let data = [
  {
    name: "Tourism",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "Read time 30 min",
    type: "tourism",
    isLiked: false,
    rating: 4.2,
    Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint aspernatur? Facilis rerum cupiditate harum eveniet labore dolore. Placeat sint dolorum doloribus laboriosam! Commodi culpa eius eveniet dignissimos ratione, sint saepe doloremque illum consequatur minus distinctio, nemo est! Saepe provident laudantium rerum ipsam perferendis assumenda, iusto sequi non quaerat est ea fugit magnam praesentium ducimus quisquam similique! Dolore, alias dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut inventore sed? Dolores atque dolorem sequi obcaecati sit, iusto nobis."
  },
  {
    name: "karamonja",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "Read time 45 min",
    type: "tourism",
    isLiked: false,
    rating: 4.5,
    Text:"Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint aspernatur? Facilis rerum cupiditate harum eveniet labore dolore. Placeat sint dolorum doloribus laboriosam! Commodi culpa eius eveniet dignissimos ratione, sint saepe doloremque illum consequatur minus distinctio, nemo est! Saepe provident laudantium rerum ipsam perferendis assumenda, iusto sequi non quaerat est ea fugit magnam praesentium ducimus quisquam similique! Dolore, alias dignissimos.amet consectetur adipisicing elit. Nobis aut inventore sed? Dolores atque dolorem sequi obcaecati sit, iusto nobis."
  },
  {
    name: "Quiz",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "Read time 30 min",
    type: "Parties",
    isLiked: false,
    rating: 4.2,
    Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint aspernatur? Facilis rerum cupiditate harum eveniet labore dolore. Placeat sint dolorum doloribus laboriosam! Commodi culpa eius eveniet dignissimos ratione, sint saepe doloremque illum consequatur minus distinctio, nemo est! Saepe provident laudantium rerum ipsam perferendis assumenda, iusto sequi non quaerat est ea fugit magnam praesentium ducimus quisquam similique! Dolore, alias dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut inventore sed? Dolores atque dolorem sequi obcaecati sit, iusto nobis."
  },
  {
    name: "kampala Events",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "Read time 45 min",
    type: "Parties",
    isLiked: false,
    rating: 4.5,
    Text:"Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint aspernatur? Facilis rerum cupiditate harum eveniet labore dolore. Placeat sint dolorum doloribus laboriosam! Commodi culpa eius eveniet dignissimos ratione, sint saepe doloremque illum consequatur minus distinctio, nemo est! Saepe provident laudantium rerum ipsam perferendis assumenda, iusto sequi non quaerat est ea fugit magnam praesentium ducimus quisquam similique! Dolore, alias dignissimos.amet consectetur adipisicing elit. Nobis aut inventore sed? Dolores atque dolorem sequi obcaecati sit, iusto nobis."
  },
  {
    name: "work out routine",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "Read time 30 min",
    type: "lifestyle",
    isLiked: false,
    rating: 4.2,
    Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint aspernatur? Facilis rerum cupiditate harum eveniet labore dolore. Placeat sint dolorum doloribus laboriosam! Commodi culpa eius eveniet dignissimos ratione, sint saepe doloremque illum consequatur minus distinctio, nemo est! Saepe provident laudantium rerum ipsam perferendis assumenda, iusto sequi non quaerat est ea fugit magnam praesentium ducimus quisquam similique! Dolore, alias dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut inventore sed? Dolores atque dolorem sequi obcaecati sit, iusto nobis."
  },
  {
    name: "magazine",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "Read time 45 min",
    type: "lifestyle",
    isLiked: false,
    rating: 4.5,
    Text:"Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint aspernatur? Facilis rerum cupiditate harum eveniet labore dolore. Placeat sint dolorum doloribus laboriosam! Commodi culpa eius eveniet dignissimos ratione, sint saepe doloremque illum consequatur minus distinctio, nemo est! Saepe provident laudantium rerum ipsam perferendis assumenda, iusto sequi non quaerat est ea fugit magnam praesentium ducimus quisquam similique! Dolore, alias dignissimos.amet consectetur adipisicing elit. Nobis aut inventore sed? Dolores atque dolorem sequi obcaecati sit, iusto nobis."
  },
    {
    name: "Zoo Entebe",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "Read time 30 min",
    type: "tourism",
    isLiked: false,
    rating: 4.2,
    Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint aspernatur? Facilis rerum cupiditate harum eveniet labore dolore. Placeat sint dolorum doloribus laboriosam! Commodi culpa eius eveniet dignissimos ratione, sint saepe doloremque illum consequatur minus distinctio, nemo est! Saepe provident laudantium rerum ipsam perferendis assumenda, iusto sequi non quaerat est ea fugit magnam praesentium ducimus quisquam similique! Dolore, alias dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut inventore sed? Dolores atque dolorem sequi obcaecati sit, iusto nobis."
  },
  {
    name: "Miss tourism bootcamp",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "Read time 45 min",
    type: "tourism",
    isLiked: false,
    rating: 4.5,
    Text:"Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint aspernatur? Facilis rerum cupiditate harum eveniet labore dolore. Placeat sint dolorum doloribus laboriosam! Commodi culpa eius eveniet dignissimos ratione, sint saepe doloremque illum consequatur minus distinctio, nemo est! Saepe provident laudantium rerum ipsam perferendis assumenda, iusto sequi non quaerat est ea fugit magnam praesentium ducimus quisquam similique! Dolore, alias dignissimos.amet consectetur adipisicing elit. Nobis aut inventore sed? Dolores atque dolorem sequi obcaecati sit, iusto nobis."
  },
]

//searh function
function filterDataOnInputChange() {
  clearBody();
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredData = data.filter((dataItem) =>
    dataItem.name.toLowerCase().includes  (searchTerm)
  );
  displayData(filteredData);
}

document
  .getElementById("search")
  .addEventListener("input", filterDataOnInputChange);

//display data function
const mainBody = document.getElementById("mainBody");
const allRecipes = document.getElementById("allRecipes");
allRecipes.addEventListener("click", displayDataAll);

function displayData(data) {
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.id = "card";
    card.innerHTML = `   <div
        class="cardImage"
        style="
          background-image: url(${data[i].imageSrc});
          background-repeat: no-repeat;
          background-size: cover;
        "
      ></div>
      <span class="cardType">${data[i].type}</span>
      <p class="cardName">${data[i].name}</p>
      <div class="cardFooter">
          <p>${data[i].time}</p>
          <div style="display:flex;align-items:center;">
            <img src="like.png" alt="like" loading="lazy" />
            <p>${data[i].Text}</p>
            <svg
                style="margin:0px 5px;"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clip-path="url(#clip0_3238_140)">
                <path
                  d="M18.9347 15.5907C20.0485 13.6639 20.4228 11.3976 19.9877 9.21499C19.5526 7.03241 18.3377 5.08289 16.5701 3.73063C14.8025 2.37837 12.6031 1.71587 10.3827 1.86689C8.16225 2.01791 6.07277 2.97212 4.50454 4.55127C2.93632 6.13041 1.99663 8.22647 1.86103 10.4479C1.72542 12.6693 2.40317 14.8641 3.76766 16.6222C5.13215 18.3804 7.09006 19.5817 9.27561 20.0017C11.4612 20.4217 13.7249 20.0316 15.6438 18.9044L20.1667 20.1667L18.9347 15.5907Z"
                  stroke="#252525"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3238_140">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
              
          </div>
        </div>`;
    mainBody.appendChild(card);
  }
}



//clearing the current data on display
function clearBody() {
  mainBody.innerHTML = ``;
}

//display all recipes
function displayDataAll() {
  clearBody();
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.id = "card";
    card.innerHTML = `   <div
      class="cardImage"
      style="
        background-image: url(${data[i].imageSrc});
        background-repeat: no-repeat;
        background-size: cover;
      "
    ></div>
    <span class="cardType">${data[i].type}</span>
    <p class="cardName">${data[i].name}</p>
    <div class="cardFooter">
        <p>${data[i].time}</p>
        <div style="display:flex;align-items:center;">
          <img src="like.png" alt="like" loading="lazy" />
          <svg
              style="margin:0px 5px;"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g clip-path="url(#clip0_3238_140)">
              <path
                d="M18.9347 15.5907C20.0485 13.6639 20.4228 11.3976 19.9877 9.21499C19.5526 7.03241 18.3377 5.08289 16.5701 3.73063C14.8025 2.37837 12.6031 1.71587 10.3827 1.86689C8.16225 2.01791 6.07277 2.97212 4.50454 4.55127C2.93632 6.13041 1.99663 8.22647 1.86103 10.4479C1.72542 12.6693 2.40317 14.8641 3.76766 16.6222C5.13215 18.3804 7.09006 19.5817 9.27561 20.0017C11.4612 20.4217 13.7249 20.0316 15.6438 18.9044L20.1667 20.1667L18.9347 15.5907Z"
                stroke="#252525"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3238_140">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>`;
    mainBody.appendChild(card);
  }
}
displayDataAll();
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