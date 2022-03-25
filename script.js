const container = document.getElementById("container");
const clearBtn = document.getElementById("clearBtn");
let sideSquares;

function createGrid (sideSquares) {
    let cellEdge = parseFloat(480/sideSquares);
    for (let w = 0; w < sideSquares; w++) { //creates a sideSquares x sideSquares grid of divs
        row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let i = 0; i < sideSquares; i++) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.height = `${cellEdge}px`;
            cell.style.width = `${cellEdge}px`;
            row.appendChild(cell);
        }
    }
    console.log(sideSquares);
    console.log(cellEdge);
}
window.onload = createGrid(16);

container.addEventListener('mouseover', (e)=>{ //adds 'hovered' class to targeted cells
    if (e.target.classList.contains('hovered')) {
        e.target.classList.remove('hovered'); //prevents 'hovered' from getting stacked in the classList
    }
    e.target.className += ' hovered';
})

clearBtn.addEventListener('click', ()=>{ //clears grid with button click and prompts 
    let cells = document.querySelectorAll('.hovered');
    cells.forEach(cell => cell.classList.remove('hovered')); //forEach iterates through nodelist returned by querySelectorAll
    newGrid();
});

function newGrid () {
    container.innerHTML = '';
    sideSquares = prompt("How many sqaures per side?: ");
    if (sideSquares >= 100) {
        sideSquares = 100;
    } else if (sideSquares <= 1) {
        sideSquares = 1;
    }
    createGrid(sideSquares);
}

