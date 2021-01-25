class LightsOutGame {
    // TODO: Create a constructor with grid size parameter that calls gridSize setter
    constructor(size){
        this.#gridSize = size;
        this.newGame();
    }
    #gridSize;
    get gridSize(){
        return this.#gridSize;
    }
    set gridSize(value){
        if(value<3 || value> 7){
            throw new RangeError("Invalid value encountered.");
        }
        else
            this.#gridSize = value;
    }
    newGame() {
        // Boolean array of arrays (2D array) to store on/off values
        this.grid = [];
        var isNeverOn = true;
        // Create a 2D array
        for (let r = 0; r < this.#gridSize; r++) {
            this.grid.push(new Array(this.#gridSize));
        }

        // TODO: Turn lights on/off randomly in grid by assigning true/false; ensure at least 1 light is on
        for(let r = 0; r < this.#gridSize; r++){
            for(let c = 0; c < this.#gridSize; c++){
                  this.grid[r][c] = Boolean(Math.round(Math.random()));
                  if(this.grid[r][c] == true){
                      isNeverOn = false;
                  }
            }
        }
        if(isNeverOn){
            this.grid[0][0] = true;
        }

    }

    // TODO: Return grid value at given row and col or undefined if row or col are outside of grid
    getGridValue(row, col) {
        if(row >=0 && row <= this.#gridSize && col >= 0 && col <= this.#gridSize){
            return this.grid[row][col];
        }
        else{
            return undefined;
        }
    }

    // TODO: Invert light at given row and col and all adjacent lights. Throw RangeError if row or col are outside of grid
    flipLights(row, col) {
        if (row < 0 || row >= this.#gridSize || col < 0 || col >= this.#gridSize){
            throw new RangeError("Row or column is outside the legal range of 0 to ");
        }

        for (let r = 0; r < this.#gridSize; r++) {
            for (let c = 0; c < this.#gridSize; c++) {
                if(Math.abs(c-col)<=1 && Math.abs(r-row)<=1)
                    this.grid[r][c]= !this.grid[r][c];
            }
        }
     }

    // TODO: Return true if all lights are out, false if at least one light is on
    isGameOver() {
         for(let r = 0; r<this.#gridSize; r++){
             for(let c = 0; c<this.#gridSize; c++){
                 if (this.grid[r][c] == true){
                     return false;
                 }
             }
         }
         return true;
    }

    // For testing purposes - Returns T/F for each light
    get gridState() {
        let str = "";
        for (let r = 0; r < this.#gridSize; r++) {
            for (let c = 0; c < this.#gridSize; c++) {
                str += this.grid[r][c] ? "T" : "F";
            }
        }
        return str;
    }

    // For testing purposes - Sets the grid when gives string of T/F values
    set gridState(value) {
        const gridSize = Math.sqrt(value.length);
        this.gridSize = gridSize;
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                this.grid[r][c] = value.charAt(r * gridSize + c) == "T";
            }
        }
    }
 }