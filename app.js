function myfun()
{
            myGameArea.start();
}

var myGameArea = {
        start:function(){
                let c=document.getElementById("game-space");
                // let c=document.querySelector("canvas")
                c.height=window.innerHeight;
                c.width=window.innerWidth;
                let ctx=c.getContext("2d");
                let i;
                for(i=0;i<120;i++)
                {
                    let x=Math.floor(Math.random()*c.width);
                    let y=Math.floor(Math.random()*c.height);
                    console.log(x+""+y)
                    ctx.beginPath();
                    ctx.arc(x,y,10,0,2*Math.PI);
                    ctx.fillStyle="#DAE0E2";
                    ctx.fill();
                }
        }   
}
      