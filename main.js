const catImage = document.querySelector(".show-img")
const changeImage = document.querySelector(".submit")

const resolution = document.querySelector(".resolution")

const width = document.querySelector("#width-img")
const height = document.querySelector("#height-img")

changeImage.addEventListener('click', (e) => {
    catImage.style.backgroundImage = "url(" + `http://placekitten.com/${width.value}/${height.value}` + ")"
})

resolution.addEventListener('click', (e) => {
    catImage.style.width = width.value + "px"
    catImage.style.height = height.value + "px"
})




