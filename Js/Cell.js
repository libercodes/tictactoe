class Cell{
    constructor(id){
        this.dom = document.createElement('div')
        let _id= document.createAttribute('id');
        _id.value = `${id}`;
        this.dom.setAttributeNode(_id);
        let className = document.createAttribute('class');
        className.value = 'cell';
        this.dom.setAttributeNode(className);
        document.getElementById('board').appendChild(this.dom);
        this.dom.addEventListener('click',this.Select) 
        this.dom = document.getElementById(id);
        this.id =id;
    }
    id;
    checkedBy = 0;
    dom;
    cellChecked = false;
    Select(){
        if(game.ended) this.cellChecked = true;
        if(!this.cellChecked){
            if(game.player===1){
                console.log('Player 1 clicked');
                document.getElementById(this.id).classList.add('p1');
                this.cellChecked = true;
                this.checkedBy = 1;
                board.findOneAndUpdate(this.id,1);
                console.log(board.cellList);
                game.ChangePlayer();
                
                
            }
            else{
                console.log('Player 2 clicked');
                document.getElementById(this.id).classList.add('p2');
                this.cellChecked = true;
                this.checkedBy = 2;
                board.findOneAndUpdate(this.id,2);
                console.log(board.cellList);
                game.ChangePlayer();
            }
            game.numberOfClicks++;
            
            console.log(`Clicks: ${game.numberOfClicks}`);
            game.SetWinner();
        }
    }

}