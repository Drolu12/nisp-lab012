class Rook {
    constructor() {
        this.type = "ROOK";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);
        return (dx === 0 && dy > 0) || (dy === 0 && dx > 0);
    }
}