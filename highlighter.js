const boardState = {}; 
let selectedSquareId = null;

const pieceSymbols = {
    "KING": "♚", "QUEEN": "♛", "ROOK": "♜", "BISHOP": "♝", "KNIGHT": "♞", "PAWN": "♟"
};

function createPiece(type) {
    switch (type) {
        case "KING": return new King();
        case "QUEEN": return new Queen();
        case "ROOK": return new Rook();
        case "BISHOP": return new Bishop();
        case "KNIGHT": return new Knight();
        case "PAWN": return new Pawn();
        default: return null;
    }
}

function renderBoard() {
    document.querySelectorAll('.field').forEach(square => {
        square.innerHTML = ""; 
        square.style.fontSize = "45px"; 
        square.style.textAlign = "center";
        square.style.lineHeight = "1";
        square.style.cursor = "pointer";
        square.style.userSelect = "none";
        
        if (boardState[square.id]) {
            square.innerHTML = pieceSymbols[boardState[square.id].type];
        }
    });
}

document.addEventListener('click', function(event) {
    const clickedSquare = event.target.closest('.field'); 
    if (!clickedSquare) return;

    const clickedId = clickedSquare.id;
    const idParts = clickedId.split('_');
    const clickX = parseInt(idParts[0]); 
    const clickY = parseInt(idParts[1]);

    const wasPieceSelected = selectedSquareId !== null;

    if (selectedSquareId && clickedSquare.classList.contains('highlight-move')) {
        boardState[clickedId] = boardState[selectedSquareId];
        delete boardState[selectedSquareId];
        
        selectedSquareId = null;
        document.querySelectorAll('.highlight-move').forEach(s => s.classList.remove('highlight-move'));
        document.querySelectorAll('.selected-piece').forEach(s => s.classList.remove('selected-piece'));
        
        renderBoard();
        return;
    }

    document.querySelectorAll('.highlight-move').forEach(s => s.classList.remove('highlight-move'));
    document.querySelectorAll('.selected-piece').forEach(s => s.classList.remove('selected-piece'));
    selectedSquareId = null;

    if (boardState[clickedId]) {
        selectedSquareId = clickedId;
        clickedSquare.classList.add('selected-piece');
        const pieceObj = boardState[clickedId];

        for (let x = 0; x <= 8; x++) {
            for (let y = 0; y <= 8; y++) {
                const move = { sourceX: clickX, sourceY: clickY, destinationX: x, destinationY: y };
                if (pieceObj.validateMove(move)) {
                    const targetSquare = document.getElementById(`${x}_${y}`);
                    if (targetSquare) targetSquare.classList.add('highlight-move');
                }
            }
        }
    } else {
        if (!wasPieceSelected) {
            const selectedPieceType = document.getElementById('chess').value;
            boardState[clickedId] = createPiece(selectedPieceType);
            renderBoard();
        }
    }
});