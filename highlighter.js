document.addEventListener('click', function(event) {
    const clickedSquare = event.target.closest('.field'); 
    
    if (!clickedSquare) return;

    document.querySelectorAll('.highlight-move').forEach(square => {
        square.classList.remove('highlight-move');
    });

    const idParts = clickedSquare.id.split('_');
    if (idParts.length !== 2) return;

    const sourceX = parseInt(idParts[0]); 
    const sourceY = parseInt(idParts[1]);

    const selectedPieceType = document.getElementById('chess').value;
    let pieceObj;

    switch (selectedPieceType) {
        case "KING": pieceObj = new King(); break;
        case "QUEEN": pieceObj = new Queen(); break;
        case "ROOK": pieceObj = new Rook(); break;
        case "BISHOP": pieceObj = new Bishop(); break;
        case "KNIGHT": pieceObj = new Knight(); break;
        case "PAWN": pieceObj = new Pawn(); break;
        default: return; 
    }

    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 8; y++) {
            const move = {
                sourceX: sourceX,
                sourceY: sourceY,
                destinationX: x,
                destinationY: y
            };

            if (pieceObj.validateMove(move)) {
                const targetSquare = document.getElementById(`${x}_${y}`);
                if (targetSquare) {
                    targetSquare.classList.add('highlight-move');
                }
            }
        }
    }
});