const gridHtml = document.getElementById("game")
const btnGame = document.getElementById("button")
const arrayBombs = []

btnGame.addEventListener("click", function(){
    gridHtml.classList.add("gridDisplay")

    for (let i = 1; i <= 100; i++){
        let cell = document.createElement("div")
    
        cell.classList.add("cell")
    
        cell.innerHTML= (`<span>${i}</span>`)

        cell.addEventListener("click", function(){
            this.classList.toggle("blue")

            console.log(`Il numero uscito è: ${i}`)
        })
    
        gridHtml.append(cell)
    }
    return
})

do {

    let pcBombs = rundomNumber(64)

    if (!arrayBombs.includes(pcBombs)) {

        arrayBombs.push(pcBombs)
    }
} while (arrayBombs.length !== 64)

console.log(arrayBombs)


function rundomNumber(max) {
    return Math.floor(Math.random() * max) + 1
}

