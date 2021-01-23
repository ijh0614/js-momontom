const body = document.querySelector("body");
const IMG_NUM = 5;



function paintImg(imgNum){
    const img = new Image();
    img.src = `img/${imgNum}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function genRandom(){
    const number = Math.ceil(Math.random()*IMG_NUM);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();