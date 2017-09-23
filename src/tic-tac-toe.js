class TicTacToe {
  constructor() {
    this.currentSymbol = "x";
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.turn = 0;
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] == null) {
      this.turn++;
      this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this.switchSymbol();
      this.chkWinner();
    }
  }

  switchSymbol() {
    if (this.currentSymbol == "x")
      this.currentSymbol = "o";
    else
      this.currentSymbol = "x";
    return this.currentSymbol;
  }

  isFinished() {
    if ((this.winner != null) || (this.isDraw()))
      return true;
    else
      return false;
  }

  chkWinner() {
    for (let i = 2; i >= 0; i--) {
      if ((this.matrix[i][0] == this.matrix[i][1]) && (this.matrix[i][1] == this.matrix[i][2]) && (this.matrix[i][1] != null))
        this.winner = this.matrix[i][0];
      if ((this.matrix[0][i] == this.matrix[1][i]) && (this.matrix[1][i] == this.matrix[2][i]) && (this.matrix[1][i] != null))
        this.winner = this.matrix[0][i];
    }

    if ((this.matrix[0][0] == this.matrix[1][1]) && (this.matrix[1][1] == this.matrix[2][2]) && (this.matrix[1][1] != null))
      this.winner = this.matrix[1][1];
    if ((this.matrix[0][2] == this.matrix[1][1]) && (this.matrix[1][1] == this.matrix[2][0]) && (this.matrix[1][1] != null))
      this.winner = this.matrix[1][1];
  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    if (this.turn == 9)
      return true;
    else
      return false;
  }

  isDraw() {
    if (this.turn == 9 && this.winner == null)
      return true;
    else
      return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;