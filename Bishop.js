class Bishop {
    constructor() {
        this.type = "BISHOP";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);
        return dx === dy && dx > 0;
    }
}