// Fonctionnalité 1
let footerEl = document.getElementsByTagName("footer");
let onFooterClick = function() {
  console.log("Click");
};
footerEl[0].addEventListener("click", onFooterClick);

// Fonctionnalité 1-bis
let clickCounter = 0
let onFooterClickWithCounter = function() {
  clickCounter ++ ;
  console.log(`Click ${clickCounter}`);
};
footerEl[0].addEventListener("click", onFooterClickWithCounter);

// Fonctionnalité 2
let navbarHeaderEl = document.getElementById("navbarHeader");
let buttonEl = document.querySelector("button.navbar-toggler");
let open = false;
let onNavbarHeaderClick = function() {
  if(open === false) {
    navbarHeaderEl.classList.remove("collapse");
    open = true;
  } else if(open === true) {
    navbarHeaderEl.classList.add("collapse");
    open = false;
  }
};
buttonEl.addEventListener("click", onNavbarHeaderClick);

// Fonctionnalité 3
let firstEditButtonEl = document.querySelector("button.btn-outline-secondary");
let firstCardTextEl = document.querySelector(".card-text");
let onButtonClick = function() {
  firstCardTextEl.style.color = "red";
};
firstEditButtonEl.addEventListener("click", onButtonClick);

// Fonctionnalité 4
let secondEditButtonEl = document.querySelectorAll("button.btn-outline-secondary")[1];
let secondCardTextEl = document.querySelectorAll(".card-text")[1];
let originalColor = true;
let onSecondButtonClick = function() {
  if(originalColor === true) {
    secondCardTextEl.style.color = "green";
    originalColor = false;
  } else if (originalColor === false) {
    secondCardTextEl.style.color = "";
    originalColor = true;
  }
};
secondEditButtonEl.addEventListener("click", onSecondButtonClick);

// Fonctionnalité 5
let navbarEl = document.getElementsByClassName("navbar");
let bootstrapLinkEl = document.getElementsByTagName("link");
let savedBootstrapEl = bootstrapLinkEl[0].href;
let withBootstrap = true;
let onNavbarClick = function() {
  if (withBootstrap === true) {
    bootstrapLinkEl[0].href = "";
    withBootstrap = false;
  } else if (withBootstrap === false) {
    bootstrapLinkEl[0].href = savedBootstrapEl;
    withBootstrap = true;
  }
};
navbarEl[0].addEventListener("dblclick", onNavbarClick);

// Fonctionnalité 6
let viewEl = document.querySelectorAll("button.btn-success");
let cardEl = document.getElementsByClassName("card");
let normalSize = [true, true, true, true, true, true];
let onMouseOverView = function(i) {
  if (normalSize[i] === true) {
    cardEl[i].children[0].style.height = "20%";
    cardEl[i].children[0].style.width = "20%";
    cardEl[i].children[1].style.color = "white";
    normalSize[i] = false;  
  } else if (normalSize[i] === false) {
    cardEl[i].children[0].style.height = "";
    cardEl[i].children[0].style.width = "";
    cardEl[i].children[1].style.color = "";
    normalSize[i] = true;
  }
};

for (let i = 0; i < cardEl.length; i++) {
  viewEl[i].addEventListener("mouseover", function() {
    onMouseOverView(i);
  })
};

// Fonctionnalité 7
let buttonRightEl = document.querySelector("a.btn-secondary");

// Fonctionnalité 8
// Fonctionnalité 9
