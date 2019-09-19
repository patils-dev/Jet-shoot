
function initGame() {

    
    let c=document.getElementById("game-space");
    c.height=window.innerHeight;
    c.width=window.innerWidth;
    let ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(200,200,20,0,2*Math.PI);
    ctx.fillStyle="#DAE0E2";
    ctx.fill();
}
// document.onload = function(){
    initGame();
// }
