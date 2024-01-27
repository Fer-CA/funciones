// function pintar(){
    // ele.style.backgroundColor = 'yellow'
//   }
//   const ele = document.getElementById("ele1") 
//   ele.addEventListener("click", pintar);


// Solución 2.2
// function pintar () {
    // ele.style.background = "yellow"
// }
// const ele = document.getElementById("ele1") 
// ele.addEventListener("click", () => pintar (ele)
// )

// Solución 2.3
function pintar (ele, color = "green") {
    ele.style.background = color
}
const ele = document.getElementById("ele1") 
ele.addEventListener("click", () => {
    pintar (ele, "yellow")
})