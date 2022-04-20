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