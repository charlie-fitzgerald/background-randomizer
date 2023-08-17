const randomBtn = document.querySelector("#random-btn");
const resetBtn = document.querySelector("#reset-btn");
const backgroundDisplayText = document.querySelector("#background-display-text");

const randomNum = () => Math.floor(Math.random() * 255);

const randomRGB = () => {
    let r = randomNum();
    let g = randomNum();
    let b = randomNum();

    return `rgb(${r}, ${g}, ${b})`;
}

const changeBackground = () => {
    const rgb = randomRGB();

    backgroundDisplayText.innerText = `The background color is: ${rgb}`;
    document.body.style.backgroundColor = rgb;
}

const resetBackground = () => {
    backgroundDisplayText.innerText = "The background color is: rgb(0, 0, 0)";

    document.body.style.backgroundColor = `rgb(0, 0, 0)`;
}

randomBtn.addEventListener("click", e => {
    e.preventDefault();

    changeBackground();
})

resetBtn.addEventListener("click", e => {
    e.preventDefault();

    resetBackground();
})