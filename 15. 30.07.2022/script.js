let center = document.createElement('center');
let chessTable = document.createElement('table');

for(let i = 0; i < 8; i++) {
    let tr = document.createElement('tr');
    for(let j = 0; j < 8; j++) {
        let td = document.createElement('td');

        if((i + j) % 2 == 0) {
            td.setAttribute('class', 'cell whitecell');
            tr.appendChild(td);
        } else {
            td.setAttribute('class', 'blackcell');
            tr.appendChild(td);
        }
    }

    chessTable.appendChild(tr);
}

center.appendChild(chessTable);
chessTable.setAttribute('cellspacing', '0');
chessTable.setAttribute('width', '270px');
document.body.appendChild(center);

