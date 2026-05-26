class Pawn {
    constructor() {
        this.type = "PAWN";
    }

    validateMove(move) {
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