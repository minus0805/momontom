const body = document.querySelector("body");

const IMG_NUM = 3;

function renderImg(imgNum) {
    document.body.style.backgroundImage = `url('images/${imgNum + 1}.jpg')`;
}

function getRandom() {
    const num = Math.floor(Math.random() * IMG_NUM);
    return num;
}

function init(){
    const randomNum = getRandom();
    renderImg(randomNum);
}

init();
