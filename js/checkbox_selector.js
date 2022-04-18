const listItems = document.getElementsByClassName('benefits-item');
const listItemsArray = Array.from(listItems);

listItemsArray.forEach((item, index) =>
{
  const checkboxGreen = document.createElement('img');
  checkboxGreen.src = "../img/subscription/subs_checkbox_green.png";

  const checkboxRed = document.createElement('img');
  checkboxRed.src = "../img/subscription/subs_checkbox_red.png";

  if (item.classList.contains('benefits-present'))
  {item.prepend(checkboxGreen);}

  else
  {item.prepend(checkboxRed);}
});
