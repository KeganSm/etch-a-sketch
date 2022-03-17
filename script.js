const container = document.getElementById("container");
const clearBtn = document.getElementById("clearBtn");
let cell;

for (let w = 0; w < 16; w++) { //creates 16x16 grid of divs
    row = document.createElement('div');
    row.classList.add("row");
    container.appendChild(row);
    for (let i = 0; i < 16; i++) {
        cell = document.createElement('div');
        cell.classList.add("cell");
        row.appendChild(cell);
    }
}
container.addEventListener('mouseover', (event)=>{
    event.target.style.background = 'black';
})

clearBtn.addEventListener('click', ()=>{ //clears grid with button click
    cell.style.background = '';
    console.log('Clear');
});


//Mouseover function that I consolidated into eventlistener:

    //container.addEventListener('mouseover', hoverColor); //event listener to change color of divs if hovered over

    //function hoverColor (event) {
    //        event.target.style.background = 'black';    
    //}
