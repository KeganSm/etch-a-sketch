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
    let cells = document.querySelectorAll('.hovered');
    cells.forEach(cell => cell.classList.remove('hovered')); //forEach iterates through nodelist returned by querySelectorAll
});

