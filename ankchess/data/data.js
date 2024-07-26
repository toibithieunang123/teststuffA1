 function haha() {
    alert ("Test")
}

function Square(color, id , piece) {
    return {
        color, id , piece
    }
}
function SquareRow(rowid) {
    const squarerow = [];
    const abcd = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h'];
    if (rowid % 2 == 0) {

        abcd.forEach((element, index) => {
            if (index %2==0) {
                squarerow.push(Square("white",element + rowid,null)); 
            } else {
                squarerow.push(Square("black",element + rowid,null)); 
            }
             
        });
        
    } else {
        abcd.forEach((element, index) => {
            if (index %2==0) {
                squarerow.push(Square("black",element + rowid,null)); 
            } else {
                squarerow.push(Square("white",element + rowid,null)); 
            }
             
        });
    }
    return squarerow
}
export {Square};

function initGame() {
 return[SquareRow(8),SquareRow(7),SquareRow(6),SquareRow(5),SquareRow(4),SquareRow(3),SquareRow(2),SquareRow(1)];
}
export {initGame}