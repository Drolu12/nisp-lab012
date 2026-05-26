class Queen {
    constructor() {
        this.type = "QUEEN";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);
        return (dx === dy && dx > 0) || (dx === 0 && dy > 0) || (dy === 0 && dx > 0);
    }
}