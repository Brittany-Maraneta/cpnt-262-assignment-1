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

//TODO create a carousel that loops forever
document.addEventListener("DOMContentLoaded", function () {
  const carouselSlide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");

  let counter = 0;
  const size = images[0].clientWidth;

  function nextSlide() {
    if (counter >= images.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    carouselSlide.style.transition = "opacity 0.5s ease-in-out";
    carouselSlide.style.opacity = 0;
    setTimeout(() => {
      carouselSlide.style.transition = "none";
      carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      carouselSlide.style.opacity = 1;
    }, 500);
  }

  carouselSlide.style.transform = `translateX(${-size * counter}px)`;

  setInterval(nextSlide, 3000);
});

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
