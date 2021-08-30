class TicTacToe {
    matrix = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ]
    player = 1;
    space = 9;

    constructor() {        
    }

    getCurrentPlayerSymbol() {
        return this.player === 1 ? "x" : "o";
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === -1)  {
            this.matrix[rowIndex][columnIndex] = this.player;
            this.player = (this.player + 1) % 2;    
            this.space--;        
        }
    }

    isFinished() {                
        if (this.isDraw() || this.getWinner() != null) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][1] === this.matrix[i][2]) {
                if (this.matrix[i][0] === 1) {
                    return "x";
                } else if (this.matrix[i][0] === 0) {
                    return "o";
                }
            }
            if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[1][i] === this.matrix[2][i]) { 
                if (this.matrix[0][i] === 1) {
                    return "x";
                } else if (this.matrix[0][i] === 0) {
                    return "o";
                }
            }                        
        }

        if ((this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) ||
            (this.matrix[2][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[0][2])) {
                if (this.matrix[1][1] === 1) {
                    return "x";
                } else if (this.matrix[1][1] === 0) {
                    return "o";
                }
        }              

        return null;
    }

    noMoreTurns() {
        return this.space <= 0 ? true : false;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] === -1 ? null : (this.matrix[rowIndex][colIndex] === 1 ? "x" : "o");
    }
}

module.exports = TicTacToe;
