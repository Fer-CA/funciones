const divA = document.getElementById("a")
const divB = document.getElementById("b")
const divC = document.getElementById("c")
const divD = document.getElementById("d")

const changeBackgroundColor = (event) => {
    event.target.style.backgroundColor = "black"
}

divA.addEventListener("click", changeBackgroundColor)
divB.addEventListener("click", changeBackgroundColor)
divC.addEventListener("click", changeBackgroundColor)
divD.addEventListener("click", changeBackgroundColor)

