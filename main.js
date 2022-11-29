const catImage = document.querySelector(".show-img")
const changeImage = document.querySelector(".submit")

const width = document.querySelector("#width-img")
const height = document.querySelector("#height-img")

changeImage.addEventListener('click', (e) => {
    catImage.style.backgroundImage = "url(" + `http://placekitten.com/${width.value}/${height.value}` + ")"
})




