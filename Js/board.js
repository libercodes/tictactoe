class Board{
    id = 0;
    cellList=[];
    CreateCells(){
        for (let i = 1; i < 10; i++) {
            let cell = new Cell(i);
            this.cellList.push(cell);  
        }
    }


    findOneAndUpdate = (id, update) => this.cellList[id - 1].checkedBy = update;

}