const container = document.getElementById("container");
const clearBtn = document.getElementById("clearBtn");

for (let w = 0; w < 16; w++) { //creates grid of divs
    row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let i = 0; i < 16; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
}

container.addEventListener('mouseover', (e)=>{ //adds 'hovered' class to targeted cells
    if (e.target.classList.contains('hovered')) {
        e.target.classList.remove('hovered');
    }
    e.target.className += ' hovered';
})

clearBtn.addEventListener('click', ()=>{ //clears grid with button click ...not yet working
    let cells = document.getElementsByClassName('cell hovered');
    cells.className = 'cell';
});

//Currently working on a way to figure out to to make the 'hovered' class a seperate class for each cell,
// bc currrently the cell class becomes 'cell hovered' whenever it is hovered and I haven't figured out a
//way to make the clear button work to remove the 'hovered' class from the cell
