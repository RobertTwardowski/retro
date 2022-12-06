
const games = document.querySelector(".games");
const grid = document.querySelector(".grid");
const main = document.querySelector("#main");
const contactBtn = document.querySelector(".contact");
const about = document.querySelector('#about')
const aboutBtn = document.querySelector('.about')
const btn = document.querySelector('.btn1')
const btnSecond = document.querySelector('.btn2')
const contactMessage = document.querySelector('#contact-message')
const inputs = document.querySelectorAll('.input')
const message = document.querySelector('#message')
const finishMessage = document.querySelector('.finish-form')
const btnThird = document.querySelector('.btn3')

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
const contactHidden = () => contactMessage.classList.add('hidden')

const contactAdd = () => {
  message.classList.remove('hidden')
  contactMessage.classList.remove("hidden");
  mainHidden()
  aboutHidden()
  gridHidden()
}

const aboutAdd = () => {
    about.classList.remove('hidden')
    mainHidden()
    contactHidden()
    gridHidden()

}
const sendMessage = () =>{
inputs.forEach((input)=>{
input.value = ''
})
message.classList.add('hidden')
finishMessage.classList.remove('hidden')
}
const sendFinish = () => {
  main.classList.remove('hidden')
  finishMessage.classList.add('hidden')
  contactMessage.classList.add('hidden')
}

games.addEventListener("click", addAnimationOnGames);
contactBtn.addEventListener("click", contactAdd);
aboutBtn.addEventListener('click',aboutAdd)
btn.addEventListener('click',contactAdd)
btnSecond.addEventListener('click',sendMessage)
btnThird.addEventListener('click',sendFinish)