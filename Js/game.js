class Game {
    player;
    player1Points;
    player2Points;
    results;
    ended = false;
    numberOfClicks;
    Init(){
        console.clear();
        let cuadro = document.createElement('div');
        cuadro.setAttribute('id', 'board');
        document.body.appendChild(cuadro);

        this.player = 1;
        this.player1Points = 0;
        this.player2Points = 0;
        board.CreateCells();
        console.dir(board.cellList)
        game.numberOfClicks = 0;
    }
    ChangePlayer(){
        this.player === 1? this.player = 2 : this.player = 1;
    }
    CheckStatus(){
        if (board.cellList.length>0) {
            this.player1Points = 0;
            this.player2Points = 0;


            //1st ROW
            for (let i = 0; i < 3; i++) {
                if (board.cellList[i].checkedBy===1) {
                    console.log('player 1 point');
                    this.player1Points++;
                    console.log(`P1: ${this.player1Points}`);
                }
                else if(board.cellList[i].checkedBy===2) {
                    console.log('player 2 point');
                    this.player2Points++;
                    console.log(`P2: ${this.player2Points}`);
                }
            }
            if (this.player1Points>=3) {
                return 'Player 1';
            } else if (this.player2Points>=3){
                return 'Player 2';
            }
            this.player1Points = 0;
            this.player2Points = 0;



            //2nd ROW
            for (let i = 3; i < 6; i++) {
                if (board.cellList[i].checkedBy===1) {
                    console.log('player 1 point');
                    this.player1Points++;
                    console.log(`P1: ${this.player1Points}`);
                }
                else if(board.cellList[i].checkedBy===2) {
                    console.log('player 2 point');
                    this.player2Points++;
                    console.log(`P2: ${this.player2Points}`);
                } 
            }
            if (this.player1Points>=3) {
                return 'Player 1';
            } else if (this.player2Points>=3){
                return 'Player 2';
            }
            this.player1Points = 0;
            this.player2Points = 0;
            

            
            //3rd ROW
            for (let i = 6; i < 9; i++) {
                if (board.cellList[i].checkedBy===1) {
                    console.log('player 1 point');
                    this.player1Points++;
                    console.log(`P1: ${this.player1Points}`);
                }
                else if(board.cellList[i].checkedBy===2) {
                    console.log('player 2 point');
                    this.player2Points++;
                    console.log(`P2: ${this.player2Points}`);
                }
            }
            if (this.player1Points>=3) {
                return 'Player 1';
            } else if (this.player2Points>=3){
                return 'Player 2';
            }
            this.player1Points = 0;
            this.player2Points = 0;



            //1st COLUMN
            if (board.cellList[0].checkedBy==1 && board.cellList[3].checkedBy==1  && board.cellList[6].checkedBy==1) {
                this.player1Points = 3;
            }
            else if (board.cellList[0].checkedBy==2 && board.cellList[3].checkedBy==2  && board.cellList[6].checkedBy==2) {
                this.player2Points = 3;
            }
            if (this.player1Points>=3) {
                return 'Player 1';
            } else if (this.player2Points>=3){
                return 'Player 2';
            }
            this.player1Points = 0;
            this.player2Points = 0;



            //2nd COLUMN
            if (board.cellList[1].checkedBy==1 && board.cellList[4].checkedBy==1  && board.cellList[7].checkedBy==1) {
                this.player1Points = 3;
            }
            else if (board.cellList[1].checkedBy==2 && board.cellList[4].checkedBy==2 && board.cellList[7].checkedBy==2) {
                this.player2Points = 3;
            }
            if (this.player1Points>=3) {
                return 'Player 1';
            } else if (this.player2Points>=3){
                return 'Player 2';
            }
            this.player1Points = 0;
            this.player2Points = 0;



            //3rd COLUMN
            if (board.cellList[2].checkedBy==1 && board.cellList[5].checkedBy==1  && board.cellList[8].checkedBy==1) {
                this.player1Points = 3;
            }
            else if(board.cellList[2].checkedBy==2 && board.cellList[5].checkedBy==2  && board.cellList[8].checkedBy==2) {
                this.player2Points = 3;
            }
            if (this.player1Points>=3) {
                return 'Player 1';
            } else if (this.player2Points>=3){
                return 'Player 2';
            }
            this.player1Points = 0;
            this.player2Points = 0;



            //1st Diagonal
            if (board.cellList[0].checkedBy==1 && board.cellList[4].checkedBy==1  && board.cellList[8].checkedBy==1) {
                this.player1Points = 3;
            }
            else if (board.cellList[0].checkedBy==2 && board.cellList[4].checkedBy==2  && board.cellList[8].checkedBy==2) {
                this.player2Points = 3;
            }
            if (this.player1Points>=3) {
                return 'Player 1';
            } else if (this.player2Points>=3){
                return 'Player 2';
            }
            this.player1Points = 0;
            this.player2Points = 0;



            //2nd Diagonal
            if (board.cellList[2].checkedBy==1 && board.cellList[4].checkedBy==1  && board.cellList[6].checkedBy==1) {
                this.player1Points = 3;
            }
            else if (board.cellList[2].checkedBy==2 && board.cellList[4].checkedBy==2  && board.cellList[6].checkedBy==2) {
                this.player2Points = 3;
            }
            if (this.player1Points>=3) {
                return 'Player 1';
            } else if (this.player2Points>=3){
                return 'Player 2';
            }
            this.player1Points = 0;
            this.player2Points = 0;



        }
    }
    SetWinner(){
        if (this.CheckStatus()){
            this.results = this.CheckStatus() + ' WINS';
            this.ended = true;
            this.ShowWinner();
        }
        else if (this.numberOfClicks==9) {
            this.results = 'Draw!';
            this.ended = true;
            this.ShowWinner();
        }
        this.ended ? board.cellList.forEach(cell =>  cell.cellChecked = true ) : null;
    }
    ShowWinner(){
        let backdrop = document.createElement('div');
        document.body.appendChild(backdrop);
        backdrop.setAttribute('class', 'backdrop')


        let prompt = document.createElement('div');
        document.body.appendChild(prompt);
        prompt.setAttribute('id', 'promptWinner');


        let title = document.createElement('h1');
        title.textContent = this.results;
        prompt.appendChild(title);
    

        let btn = document.createElement('button');
        btn.textContent = "Jugar de nuevo";
        prompt.appendChild(btn);
        btn.addEventListener('click', () => {
            document.body.removeChild(prompt);
            document.body.removeChild(backdrop);
            document.body.removeChild(document.getElementById('board'))
            board = new Board();
            game = new Game();
            game.Init();
        })

    }
}

let game = new Game();
let board = new Board();
window.onload = game.Init();