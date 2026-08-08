// Generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color;
}
// console.log(randomColor())

let intervalId
const startChangingcolor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBGcolor, 1000)
    }
    function changeBGcolor() {
        document.body.style.backgroundColor = randomColor();
    }

}


const stoptChangingcolor = function () {
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', startChangingcolor)


document.querySelector("#stop").addEventListener('click', stoptChangingcolor)