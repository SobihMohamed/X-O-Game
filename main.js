let turn="x";
let score=document.getElementById("score");
let playerOne=document.getElementById("score_player");
let playerTwo=document.getElementById("score_PC");


let show_Score=score.lastElementChild;
let counter_check_if_is_equal=1;

function Game(id_clicked_square){
    let current_square=document.getElementById(id_clicked_square);
    if(current_square.innerHTML=="" && turn=="x"){
        counter_check_if_is_equal++;
        current_square.innerHTML="X";
        turn="o";
        playerMesasge(turn);
    }
    else if(current_square.innerHTML=="" && turn=="o"){
        counter_check_if_is_equal++;
        current_square.innerHTML="O";
        turn="x";
        playerMesasge(turn);
    }
    winner();
    if(counter_check_if_is_equal>9){
        counter_check_if_is_equal=1;
        show_Score.innerHTML = ` NO WINNER! `;
        setTimeout(()=>{
            clearGame();
            playerMesasge(turn);
        },2000);
    }
}
let Squares=[];
function winner(){
    for (let i = 0; i < 9; i++) {
        let squ=document.getElementById(`item${i+1}`);
        Squares[i]=squ.innerHTML;        
    }
    if (
        Squares[0] == Squares[1] &&
        Squares[1] == Squares[2] &&
        Squares[1] != ""
    ) {
        style3Squ(1,2,3);       
        setTimeout(()=>{
            inc_score_winner(Squares[0])}
            ,3000);
        counter_check_if_is_equal=1;
        return true;
    }
    else if(
        Squares[3] == Squares[4] &&
        Squares[4] == Squares[5] &&
        Squares[3] != ""
    ){
        style3Squ(4,5,6);       
        setTimeout(()=>{
            inc_score_winner(Squares[4])}
            ,3000);
        counter_check_if_is_equal=1;
        return true;
    }

    else if(
        Squares[6] == Squares[8] &&
        Squares[6] == Squares[7] &&
        Squares[7] != ""
    ){
        style3Squ(7,8,9);       
        setTimeout(()=>{
            inc_score_winner(Squares[7])}
            ,3000);
        counter_check_if_is_equal=1;
        return true;

    }
    else if(
        Squares[0] == Squares[4] &&
        Squares[4] == Squares[8] &&
        Squares[4] != ""
    ){
        style3Squ(1,5,9);       
        setTimeout(()=>{
            inc_score_winner(Squares[0])}
            ,3000);
        counter_check_if_is_equal=1;
        return true;
    }
    else if(
        Squares[2] == Squares[4] &&
        Squares[2] == Squares[6] &&
        Squares[4] != ""
    ){
        style3Squ(3,5,7);       
        setTimeout(()=>{
            inc_score_winner(Squares[2])}
            ,3000);
        counter_check_if_is_equal=1;
        return true;

    }
    else if(
        Squares[0] == Squares[3] &&
        Squares[3] == Squares[6] &&
        Squares[3] != ""
    ){
        style3Squ(1,4,7);       
        setTimeout(()=>{
            inc_score_winner(Squares[0])}
            ,3000);
        counter_check_if_is_equal=1;
        return true;
    }
    else if(
        Squares[1] == Squares[4] &&
        Squares[1] == Squares[7] &&
        Squares[1] != ""
    ){
        style3Squ(2,5,8);       
        setTimeout(()=>{
            inc_score_winner(Squares[1])}
            ,3000);
        counter_check_if_is_equal=1;
        return true;

    }
    else if(
        Squares[2] == Squares[5] &&
        Squares[2] == Squares[8] &&
        Squares[2] != ""
    ){
        style3Squ(3,6,9);       
        setTimeout(()=>{
            inc_score_winner(Squares[2])}
            ,3000);
        counter_check_if_is_equal=1;
        return true;

    }
    return false;
}

function playerMesasge(turn){
    let playerturn;
    if(turn=="o"){
        playerturn="player 2(O)";
    }
    else if(turn=="x"){
        playerturn="player 1(X)";
    }
    show_Score.innerHTML=`${playerturn}`;
}


let player1scr=0;
let player2Scr=0;
function inc_score_winner(ele){
    if (ele === "X") {
        player1scr++;
        show_Score.innerHTML = `Player 1(X) WINS!`;
        setTimeout(() => {
            show_Score.innerHTML = "";
            playerOne.innerHTML = `${player1scr}`;
            turn = "x";
            playerMesasge("x");
        }, 2000);
    }
    
    else if(ele==="O"){
        player2Scr++;
        show_Score.innerHTML=`Player 2(O) WIN `;    
        setTimeout(()=>{
            show_Score.innerHTML = "";
            playerTwo.innerHTML=`${player2Scr}`;
            turn="o"; 
            playerMesasge("o");
        },2000)
    }
    
    clearGame();
    
}
function style3Squ(n1, n2, n3) {
    document.getElementById(`item${n1}`).classList.add('shine');
    document.getElementById(`item${n2}`).classList.add('shine');
    document.getElementById(`item${n3}`).classList.add('shine');
}

function clearGame(){
    for (let i = 0; i < 9; i++) {
        let squ=document.getElementById(`item${i+1}`);
        squ.innerHTML="";
        squ.classList.remove('shine');
        squ.style.color = '';    
    }
}

let reset=document.getElementById("reset");
reset.onclick = function() {
    window.location.reload();
}