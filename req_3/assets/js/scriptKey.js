const divKey = document.getElementById("key")

const color = ""

document.addEventListener("keydown", function (event){
    if (event.key === "a") {
        divKey.style.backgroundColor = "pink"
    } else if (event.key === "s") {
        divKey.style.backgroundColor = "orange"
    } else if (event.key === "d") {
        divKey.style.backgroundColor = "skyblue"
    } else if (event.key === "q") {
        createNewDiv("purple")
    } else if (event.key === "w") {
        createNewDiv("gray")
    } else if (event.key === "e") {
        createNewDiv("brown")
    }
})

function createNewDiv(color) {
    const newDiv = document.createElement("div")
    newDiv.style.width = "200px"
    newDiv.style.height = "200px"
    newDiv.style.margin = "50px"
    newDiv.style.backgroundColor = color
    document.body.appendChild(newDiv)
}
