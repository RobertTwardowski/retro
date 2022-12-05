
const games = document.querySelector(".games");
const grid = document.querySelector(".grid");
const main = document.querySelector("#main");
const contact = document.querySelector("#contact");
const contactBtn = document.querySelector(".contact");
const about = document.querySelector('#about')
const aboutBtn = document.querySelector('.about')

const addAnimationOnGames = () => {
  grid.classList.remove("hidden");
  grid.classList.add("one");
  mainHidden()
  contactHidden()
  aboutHidden()
};

const mainHidden = () => main.classList.add("hidden");
const gridHidden = () => grid.classList.add('hidden');
const aboutHidden = () => about.classList.add('hidden');
const contactHidden = () => contact.classList.add('hidden');

const contactAdd = () => {
  
  contact.classList.remove("hidden");
  contact.classList.add("one");
  mainHidden()
  aboutHidden()
  gridHidden()
}

const aboutAdd = () => {
    about.classList.remove('hidden')
    about.classList.add('one')
    mainHidden()
    contactHidden()
    gridHidden()

}

games.addEventListener("click", addAnimationOnGames);
contactBtn.addEventListener("click", contactAdd);
aboutBtn.addEventListener('click',aboutAdd)
