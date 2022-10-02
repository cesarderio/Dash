'use strict'

//------Changing background function------
const dash = document.querySelector('body');

const imgBGArray = [
  './img/himal-rana-c8jaJItyxKU-unsplash.jpg', './img/pexels-abdullah-ghatasheh-1631677.jpg',
  './img/pexels-pixabay-461940.jpg','./img/Photo_6553679_DJI_79_jpg_3982776_0_2020101414350_photo_original.jpg','img/ricardo-gomez-angel-dtEJ7ueDYFk-unsplash.jpg','img/stefano-bazzoli-_KhePTaoa10-unsplash.jpg'
];

function backgroundImg()





function paintImage(imgNumber) {
  const image = new Image();
  image.src = IMG_ARR[imgNumber];
  image.classList.add('bgImage');
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_ARR.length);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
//---------------------

//------------Clock---------
17 lines (14 sloc)  504 Bytes

const clockContainer = document.querySelector(".js-clock");
const clockText = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockText.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
//--------------------







//---------- TODO ------

// todo list array
let todoItem = [];

// function to create a new todo object
// text entered in input, 

function addTodo(text){
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItem.push(todo);
  console.log(todoItem);
}

// select the form element

const form = document.querySelector('.js-form');
// add submit event listener
form.addEventListener('submit', event => {
  // prevent page refresh on form submission
  event.preventDefault();
  //select the text input
  const input = document.querySelector('.js-todo-input');

  // Get value of input and remove whitespace
  const text = input.ariaValueMax.trim();
  if (text !== ''){
    addTodo(text);
    input.value = '';
    input.focus();
  }
});
