document.getElementById("button").addEventListener("click", function(event) {
  // console.log(`${name} clicked the button!`)
  console.log(event)
})

document.getElementById("input").addEventListener("input", function () {
  console.log("Input changed!")
})

document.getElementById("box").addEventListener("mouseover", function () {
  console.log("Hovered in box!")
})