class Pawn {
    constructor() {
        this.type = "PAWN";
    }

    validateMove(move) {
        if (move.sourceY === 8) {
            const dx = Math.abs(move.destinationX - move.sourceX);
            const dy = Math.abs(move.destinationY - move.sourceY);
            return (dx === dy && dx > 0) || (dx === 0 && dy > 0) || (dy === 0 && dx > 0);
        }

        if (move.sourceX !== move.destinationX) {
            return false;
        }

        if (move.destinationY === move.sourceY + 1) {
            return true;
        }

        if (move.sourceY === 1 && move.destinationY === move.sourceY + 2) {
            return true;
        }

        return false;
    }
}