const gridHtml = document.getElementById("game")
const btnGame = document.getElementById("button")
let pcBombs = Math.floor(Math.random() * 100) + 1;

const arrayBombs = []

if (!arrayBombs.includes(pcBombs)) {

    for (let y = 1; y <= 16; y++){
        arrayBombs.push(pcBombs)
    }

    console.log(arrayBombs)
}


btnGame.addEventListener("click", function(){
    gridHtml.classList.add("gridDisplay")

    for (let x = 1; x <= 100; x++){
        let cell = document.createElement("div")
    
        cell.classList.add("cell")
    
        cell.innerHTML= (`<span>${x}</span>`)

        cell.addEventListener("click", function(){

            if ( x == pcBombs){
                this.classList.toggle("red")
                alert("HAI PERSO")
            } else {
                this.classList.toggle("blue")
            }

            console.log(`Il numero uscito è: ${x}`)            
        })
    
        gridHtml.append(cell)
    }
    return
})



