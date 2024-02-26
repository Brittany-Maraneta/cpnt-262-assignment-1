//TODO Create a Nav Bar that is hamburger menu always. Make sure its sticky
function openNav() {
  document.getElementById("hamMenu").style.width = "100vw";
}

function closeNav() {
  document.getElementById("hamMenu").style.width = "0";
}

//TODO Make sure the hamburger menu closes when changing desktop to mobile

function closeNavIfOpen() {
  if (window.innerWidth > 768) {
    document.getElementById("hamMenu").style.width = "0";
  }
}

window.addEventListener("resize", closeNavIfOpen);

//TODO Create a toggle
function toggleDarkMode() {
  document.body.classList.toggle("darkMode");
}

//TODO hide the button from 1 click to go to the next section
function scrollWin() {
  window.scrollBy(0, 600);
  document.querySelector(".scrollButton").remove();
}

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  if (scrollPosition === 0) {
    document.querySelector(".scrollButton").style.display = "block";
  } else {
    document.querySelector(".scrollButton").style.display = "none";
  }
});

function scrollWin() {
  window.scrollBy(0, 660);
}
