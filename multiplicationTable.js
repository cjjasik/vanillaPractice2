// 2. PRINT A TABLE CONTAINING MULTIPLICATION TABLES
function multiplicationTable(start, multiply) {
    let tableColumn = [];
    for (let column = start; column <= multiply; column++ ) {
        let tableRow = [];
        for (let row = start; row <= multiply; row++) {
            tableRow.push(column * row);
        }
        tableColumn.push(tableRow);
    }

    return (tableColumn);
}
console.log(multiplicationTable(1, 10));