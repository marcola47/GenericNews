/* Navbar animation */
const icon = document.querySelector('.nav-menu-icon');
const menu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu li');

icon.addEventListener('click', () =>
{
  menu.classList.toggle("visible");
  menu.classList.toggle("invisible");

  navLinks.forEach((link, index) =>
  {
    if (link.style.animation) {link.style.animation = '';}
    else {link.style.animation = `nav-link 0.15s ease forwards ${index / 50 + 0.15}s`;}
  });
})

/*********************************************************************************************/
/* Favicon switch */
matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);

lightThemeIcon = document.querySelector('link#light-scheme-icon');
darkThemeIcon = document.querySelector('link#dark-scheme-icon');

function onUpdate()
{
  if (matcher.matches) {
    lightThemeIcon.remove();
    document.head.append(darkThemeIcon);
  } else {
    document.head.append(lightThemeIcon);
    darkThemeIcon.remove();
  }
}

onUpdate();

/*********************************************************************************************/
/* News slider */
document.querySelector(".news-slider-content").addEventListener("wheel", event => {
  if (event.deltaY > 0) {event.target.scrollBy(1, 0);}
  else {event.target.scrollBy(-1, 0);}
})