class TicTacToe {
    constructor() {
        this.player = "x";
        this.matrix = [
              [null, null, null],
              [null, null, null],
              [null, null, null] 
            ];
        this.winner= null;
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
          if (this.getFieldValue(rowIndex, columnIndex)=== null){
            this.matrix[rowIndex][columnIndex] = this.player;
            if (this.player==="x")
                this.player="o";
            else {
                this.player="x";
            }
        }



            var sumOrows = 0, sumOcols = 0, sumOd1 = 0, sumOd2 = 0;
            var sumXrows = 0, sumXcols = 0, sumXd1 = 0, sumXd2 = 0;

            for (var i=0; i<3; i++) {
            for (var j=0;j<3; j++) {
            if (this.matrix[i][j]==="o")  sumOcols++;
            if (this.matrix[j][i]==="o")  sumOrows++;
            if (this.matrix[i][j]==="x")  sumXcols++;
            if (this.matrix[j][i]==="x")  sumXrows++
     }     
   
    
    if (sumOcols===3||sumOrows==3) {
        this.winner="o";
        return;
    }
     if (sumXcols===3||sumXrows===3){
        this.winner="x"; return;
    }

    sumOcols=0;
     sumOrows=0;
     sumXcols=0;
     sumXrows=0;
 }


var k=2; 
 for (var i=0; i<3; i++) {
    
    if (this.matrix[i][i]==="o") sumOd1++;
    else if (this.matrix[i][i]==="x") sumXd1++;
     
    if (this.matrix[i][k]==="o") sumOd2++;
    else if (this.matrix[i][k]==="x") sumXd2++;
    k--;
 }

 if ((sumOd1===3)||(sumOd2===3)) {
    this.winner="o";
    return;
 }

 else if ((sumXd1===3)||(sumXd2===3)) {
    this.winner="x";
    return;
 }


    }

    isFinished() {
        if((this.winner!==null)|| this.noMoreTurns()) return true;
        return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
     for (var i=0; i<3; i++) {
        for (var j=0;j<3; j++)
            if (this.matrix[i][j]===null) return false;
     }

     return true;

    }

    isDraw() {
        if ((this.noMoreTurns()===false)||(this.winner!==null)) return false;
        return true;    
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
