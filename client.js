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
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

let pictures = [
  "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  "https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  "https://images.pexels.com/photos/2798477/pexels-photo-2798477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
  if (position >= pictures.length - 1) {
    position = 0;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position + 1];
  position++;
};

const moveLeft = () => {
  if (position < 1) {
    position = pictures.length - 1;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position - 1];
  position--;
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

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
