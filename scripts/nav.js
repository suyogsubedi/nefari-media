var menu = document.querySelector("#menu");
var hiddenNav = document.querySelector(".hidden-nav");
var close = document.querySelector("#close");
console.log(close.innerHTML);

// Shows the Navbar
menu.addEventListener("click", () => {
  hiddenNav.style.display = "block";
});

// Closes the navbar
close.addEventListener("click", () => {
  hiddenNav.style.display = "none";
});

// Navigation For index.html

// Scripts For Animations

