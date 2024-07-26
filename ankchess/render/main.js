import * as piece from "../data/pieces.js"
const ROOT_DIV = document.getElementById("root");

// goi khi hien thi quan co 
function pieceRender(data) {
    data.forEach(row => {
        row.forEach(square => {
            if(square.piece) {
                const squareEl = document.getElementById(square.id);

                //create piece
                const piece = document.createElement("img");
                piece.src = square.piece.img;
                piece.classList.add("piece");
                console.log(piece);

                //add piece to sqaure
                squareEl.appendChild(piece);
            }
        });
        
    });
}
// goi 1 lan khi render/hien thi ban co
function initGameRender(data) {
    data.forEach(element => {
        
        const rowEl = document.createElement("div");
        element.forEach(square => {
            const squareDiv = document.createElement("div");
            squareDiv.id = square.id;
            squareDiv.classList.add(square.color,"square");

            // render black pawn
            if (square.id[1] == 7) {
                square.piece = piece.blackPawn(square.id);
                
            }

            //render black rook
            if (square.id == 'a8' || square.id == "h8") {
                square.piece = piece.blackRook(square.id);
                
            }

            if (square.id == 'e8') {
                square.piece = piece.blackKing(square.id);
                
            }
            if (square.id == 'd8') {
                square.piece = piece.blackQueen(square.id);
                
            }
            if (square.id == 'c8' || square.id == "f8") {
                square.piece = piece.blackBishop(square.id);
                
            }

            if (square.id == 'b8' || square.id == "g8") {
                square.piece = piece.blackKnight(square.id);
                
            }
            


            // render WHITE
            if (square.id[1] == 2) {
                square.piece = piece.whitePawn(square.id);
                
            }
            if (square.id == 'a1' || square.id == "h1") {
                square.piece = piece.whiteRook(square.id);
                
            }
            if (square.id == 'e1') {
                square.piece = piece.whiteKing(square.id);
                
            }
            if (square.id == 'd1') {
                square.piece = piece.whiteQueen(square.id);
                
            }
            if (square.id == 'c1' || square.id == "f1") {
                square.piece = piece.whiteBishop(square.id);
                
            }

            if (square.id == 'b1' || square.id == "g1") {
                square.piece = piece.whiteKnight(square.id);
                
            }
            

            rowEl.appendChild(squareDiv);
        });
        
        rowEl.classList.add("squareRow");
        ROOT_DIV.appendChild(rowEl);
    });
    pieceRender(data);
}


export {initGameRender};