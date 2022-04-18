/*** Navbar animation ***/
const icon = document.querySelector('.nav-menu-icon');
const menuText = document.querySelector("#menu-text");

const lineTop = document.getElementById('line-top');
const lineCenter = document.getElementById('line-center');
const lineBottom = document.getElementById('line-bottom');

const menu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu li');

icon.addEventListener('click', () =>
{
  /* Show menu */
  menu.classList.toggle("invisible");

  /* Rotate button lines */
  lineTop.classList.toggle('line-top-change');
  lineCenter.classList.toggle('line-center-change');
  lineBottom.classList.toggle('line-bottom-change');

  /* Navigation buttons animation */
  navLinks.forEach((link, index) =>
  {
    if (link.style.animation) {link.style.animation = '';}
    else {link.style.animation = `nav-link 0.15s ease forwards ${index / 50 + 0.15}s`;}
  });
})

/*********************************************************************************************/
/*** News slider ***/
const sliderContainer = document.querySelector(".news-slider-content");
const arrowLeft = document.getElementsByClassName('arrow-left');
const arrowRight = document.getElementsByClassName('arrow-right');

/* Scroll */
sliderContainer.addEventListener("wheel", event =>
{
  if (event.deltaY > 0)
  {
    event.target.scrollBy(300, 0);
    event.preventDefault();
  }

  else
  {
    event.target.scrollBy(-300, 0);
    event.preventDefault();
  }
});

/* Arrows */
let arrowLeftArray = Array.from(arrowLeft);
arrowLeftArray.forEach(arrow =>
  {
    arrow.addEventListener('click', () =>
    {
      sliderContainer.scrollBy(-300, 0);
      console.log('clicked!');
    });
  })

let arrowRightArray = Array.from(arrowRight);
arrowRightArray.forEach(arrow =>
  {
    arrow.addEventListener('click', () =>
    {
      sliderContainer.scrollBy(300, 0);
      console.log('clicked!');
    });
  })