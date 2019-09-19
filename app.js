
    let c=document.getElementById("game-space");
    c.height=window.innerHeight;
    c.width=window.innerWidth;
    let ctx=c.getContext("2d");
                
function Circle(r,y,dy){
        this.r=r;
        this.y=y;
        this.dy=dy;
        this.draw=function(){
        ctx.beginPath();
        ctx.arc(200,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle="#DAE0E2";
        ctx.fill();
    }
    this.update=function(){
        this.y-=this.dy; 
        this.draw();
        console.log("draaw")
    }
}


let circleArray=[];
let r=Math.floor(Math.random()*30);


console.log(circleArray)
function animate(){
        requestAnimationFrame(animate);
        for(let i=0;i<40;i++)
        {
            circleArray.push(new Circle(r,700,1))
    
        }
        ctx.clearRect(0,0,innerWidth,innerHeight)
        
        for(let i=0;i<40;i++)
        {
            console.log(circleArray[i])
            circleArray[i].update();
        }
}     
animate();