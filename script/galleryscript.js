// let themeSwitchButton = document.getElementById("switcher")
// themeSwitchButton.addEventListener("click",function(){
//     document.body.classList.toggle("color");
// })



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