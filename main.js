const catImage = document.querySelector(".show-img")
const changeImage = document.querySelector(".submit")

const height = document.querySelector("#height-img")
const width = document.querySelector("#width-img")

changeImage.addEventListener('click', (e) => {
    catImage.style.backgroundImage = "url(" + `http://placekitten.com/${height.value}/${width.value}` + ")"
})




