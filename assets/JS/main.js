const gridHtml = document.getElementById("game")
const btnGame = document.getElementById("button")
const scoreHtml = document.getElementById("score")

btnGame.addEventListener("click", function(){
    let arrayBombs = []

    let punteggio = 0; 

    do {
        let numberRan = randomNum(100)

        if (!arrayBombs.includes(numberRan)) {
            arrayBombs.push(numberRan)
        }

    } while(arrayBombs.length < 16)

    console.log(arrayBombs)
    
    gridHtml.classList.add("gridDisplay")

    for (let x = 1; x <= 100; x++){
        let cell = document.createElement("div")
    
        cell.classList.add("cell")
    
        cell.innerHTML= (`<span>${x}</span>`)

        cell.addEventListener("click", function(){

            if (arrayBombs.includes(x)){
                this.classList.add("red")
                alert("HAI PERSO")
            } else {
                this.classList.add("blue")
                punteggio++
                scoreHtml.innerHTML = `<h2>Il punteggio è: ${punteggio}</h2>`
                this.style.setProperty("pointer-events", "none")
            }

            console.log(`Il numero uscito è: ${x}`)            
        })
    
        gridHtml.append(cell)
    }
    return 
})


function randomNum(max){
    return Math.floor( Math.random()*max) + 1; 
}



