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
 <a href="./gallery.html">Gallery</a>
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

function called() {
  var initPhotoSwipeFromDOM;

  initPhotoSwipeFromDOM = function(gallerySelector) {
    var closest, galleryElements, hashData, i, l, onThumbnailsClick, openPhotoSwipe, parseThumbnailElements, photoswipeParseHash;
    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    parseThumbnailElements = function(el) {
      var figureEl, i, item, items, linkEl, numNodes, size, thumbElements;
      thumbElements = el.childNodes;
      numNodes = thumbElements.length;
      items = [];
      figureEl = void 0;
      linkEl = void 0;
      size = void 0;
      item = void 0;
      i = 0;
      while (i < numNodes) {
        figureEl = thumbElements[i];
        // <figure> element
        // include only element nodes 
        if (figureEl.nodeType !== 1) {
          i++;
          continue;
        }
        linkEl = figureEl.children[0];
        // <a> element
        size = linkEl.getAttribute('data-size').split('x');
        // create slide object
        item = {
          src: linkEl.getAttribute('href'),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10)
        };
        if (figureEl.children.length > 1) {
          // <figcaption> content
          item.title = figureEl.children[1].innerHTML;
        }
        if (linkEl.children.length > 0) {
          // <img> thumbnail element, retrieving thumbnail url
          item.msrc = linkEl.children[0].getAttribute('src');
        }
        item.el = figureEl;
        // save link to element for getThumbBoundsFn
        items.push(item);
        i++;
      }
      return items;
    };
    // find nearest parent element
    closest = function(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    // triggers when user clicks on thumbnail
    onThumbnailsClick = function(e) {
      var childNodes, clickedGallery, clickedListItem, eTarget, i, index, nodeIndex, numChildNodes;
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        (e.returnValue = false);
      }
      eTarget = e.target || e.srcElement;
      // find root element of slide
      clickedListItem = closest(eTarget, function(el) {
        return el.tagName && el.tagName.toUpperCase() === 'FIGURE';
      });
      if (!clickedListItem) {
        return;
      }
      // find index of clicked item by looping through all child nodes
      // alternatively, you may define index via data- attribute
      clickedGallery = clickedListItem.parentNode;
      childNodes = clickedListItem.parentNode.childNodes;
      numChildNodes = childNodes.length;
      nodeIndex = 0;
      index = void 0;
      i = 0;
      while (i < numChildNodes) {
        if (childNodes[i].nodeType !== 1) {
          i++;
          continue;
        }
        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }
        nodeIndex++;
        i++;
      }
      if (index >= 0) {
        // open PhotoSwipe if valid index found
        openPhotoSwipe(index, clickedGallery);
      }
      return false;
    };
    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    photoswipeParseHash = function() {
      var hash, i, pair, params, vars;
      hash = window.location.hash.substring(1);
      params = {};
      if (hash.length < 5) {
        return params;
      }
      vars = hash.split('&');
      i = 0;
      while (i < vars.length) {
        if (!vars[i]) {
          i++;
          continue;
        }
        pair = vars[i].split('=');
        if (pair.length < 2) {
          i++;
          continue;
        }
        params[pair[0]] = pair[1];
        i++;
      }
      if (params.gid) {
        params.gid = parseInt(params.gid, 10);
      }
      return params;
    };
    openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
      var gallery, items, j, options, pswpElement;
      pswpElement = document.querySelectorAll('.pswp')[0];
      gallery = void 0;
      options = void 0;
      items = void 0;
      items = parseThumbnailElements(galleryElement);
      // define options (if needed)
      options = {
        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        getThumbBoundsFn: function(index) {
          var pageYScroll, rect, thumbnail;
          // See Options -> getThumbBoundsFn section of documentation for more info
          thumbnail = items[index].el.getElementsByTagName('img')[0];
          pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
          rect = thumbnail.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          };
        }
      };
      // PhotoSwipe opened from URL
      if (fromURL) {
        if (options.galleryPIDs) {
          // parse real index when custom PIDs are used 
          // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
          j = 0;
          while (j < items.length) {
            if (items[j].pid === index) {
              options.index = j;
              break;
            }
            j++;
          }
        } else {
          // in URL indexes start from 1
          options.index = parseInt(index, 10) - 1;
        }
      } else {
        options.index = parseInt(index, 10);
      }
      // exit if index not found
      if (isNaN(options.index)) {
        return;
      }
      if (disableAnimation) {
        options.showAnimationDuration = 0;
      }
      // Pass data to PhotoSwipe and initialize it
      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    };
    // loop through all gallery elements and bind events
    galleryElements = document.querySelectorAll(gallerySelector);
    i = 0;
    l = galleryElements.length;
    while (i < l) {
      galleryElements[i].setAttribute('data-pswp-uid', i + 1);
      galleryElements[i].onclick = onThumbnailsClick;
      i++;
    }
    // Parse URL and open gallery if it contains #&pid=3&gid=1
    hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
      openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
  };

  // execute above function
  initPhotoSwipeFromDOM('.gallery');

  // ---
// generated by js2coffee 2.2.0

}

called();
// let themeSwitchButton = document.getElementById("switcher")
// themeSwitchButton.addEventListener("click",function(){
//     document.body.classList.toggle("color");
// })

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