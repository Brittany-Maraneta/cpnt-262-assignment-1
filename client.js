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

//TODO scroll button and hide the button from 1 click to go to the next section
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

//TODO create a carousel
const img = document.getElementById("carousel");

let pictures = [
  {
    src: "./images/full_greece.jpg",
    alt: "Greece View",
  },

  {
    src: "./images/lake1.jpg",
    alt: "Camping Lake View",
  },

  {
    src: "./images/mexico1.jpg",
    alt: "Mexico",
  },

  {
    src: "./images/mountains2.jpg",
    alt: "Canmore AB",
  },

  {
    src: "./images/philippines1.jpg",
    alt: "Philippines",
  },

  { src: "./images/philippines2.jpg", alt: "Philippines" },
  { src: "./images/sky2.jpg", alt: "Calgary" },
];

let position = 0;

function changeImage() {
  position = (position + 1) % pictures.length;
  img.src = pictures[position].src;
  img.alt = pictures[position].alt;
}

setInterval(changeImage, 3000);

// TODO make a chat popup
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function myFunction() {
  let checkBox = document.getElementById("myCheck");
  let text = document.getElementById("text");

  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
