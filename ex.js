const cells=document.querySelectorAll(".cell");
const status1=document.getElementById('Statusupdater');
const rebtn=document.getElementById('restartbtn');
const winnnig=[
    [0,1,2],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,7]
];
let option=['', '', '','','','','','',''];
let current='X';
let running=false;
initialize();
function initialize(){
   cells.forEach(cell=>cell.addEventListener("click",cellclicked));
   rebtn.addEventListener("click",restartgame);
   status1.textContent=`${current}'s turn`;
   running=true; 
}
function cellclicked(){
    console.log('no');
    const cellIndex=this.getAttribute('cellindex');
    if (option[cellIndex]!='' || !running){
        return;
    }
    updatecell(this, cellIndex);
    checkwinner();
}
function updatecell(cell, index){
    option[index]=current;
    cell.textContent=current;
}
function changeplayer(){
    console.log('yes');
    current=(current=='X')? "O":"X";
    status1.textContent=`${current}'s turn`;
}
 function restartgame(){
current="X";
 option=['', '', '','','','','','',''];
status1.textContent=`${current}'s turn`;
cells.forEach(cell=>cell.textContent="");
running=true;
 }
 function checkwinner(){
    let roundwon=false;
    for (let i=0;i<winnnig.length;i++){
        const condition=winnnig[i];
        const cellA=option[condition[0]];
        const cellb=option[condition[1]];
        const cellc=option[condition[2]];
        if (cellA==""|| cellb==''||cellc==''){
            continue;
        }
        if (cellA==cellb&&cellb==cellc){
            roundwon=true;
            break;
        }
    }
    if (roundwon){
        status1.textContent=`${current} wins`;
        running=false; 
    }
    else if (!option.includes('')){
        status1.textContent='Draw';
        running=false;
    }
    else{
        changeplayer();
    }
 }