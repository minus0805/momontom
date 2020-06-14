const form = document.querySelector(".js-form-greeting"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greeting"),
      toDo = document.querySelector(".js-form-toDo"),
      toDoForm2 = document.querySelector(".js-form-toDo"),
      toDoInput2 = toDoForm2.querySelector("input");

const USER_LS = "currentUser";
      SHOWING_CN = "showing";
      HIDE = "hide"

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
      saveName(currentValue);
      toDo.classList.remove(HIDE);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}! write down new todos`;
    toDoInput2.focus();
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null){
    askForName();
  } else {
    paintGreeting(currentUser);
    toDo.classList.remove(HIDE);
  }
}


function init() {
  loadName();
  input.focus();
}

init();
