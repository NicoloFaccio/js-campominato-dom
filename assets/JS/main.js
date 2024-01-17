const gridHtml = document.getElementById("game")
const btnGame = document.getElementById("button")

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