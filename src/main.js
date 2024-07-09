const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
console.log(headerHeight);

document.addEventListener("scroll", () => {
  if(window.scrollY > headerHeight/2) {
    header.style.backgroundColor = "black";
  }
  else {
    header.style.backgroundColor = "transparent";
  }
});

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
console.log(homeHeight);
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrow = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight/2) {
    arrow.style.opacity = 0;
  }
  else {
    arrow.style.opacity = 1;
  }
});