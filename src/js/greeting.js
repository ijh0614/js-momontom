const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings")
const USER_LS = "currentUser"
const SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

//일단 localStorage에서 정보를 뽑아옴. 없으면 집어넣는 식으로.
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    //유저가 저장되지 않은 경우
    if(currentUser === null){
        askForName();
    } else {//저장된 경우
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();