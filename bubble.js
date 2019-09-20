
    // let c=document.getElementById("game-space");
    // c.height=window.innerHeight;
    // c.width=window.innerWidth;
    // let ctx=c.getContext("2d");
                
// function Circle(x,y,r,dy){
//         this.r=r;
//         this.x=x;
//         this.y=y;
//         this.dy=dy;

        
//     this.draw=function(){
//         ctx.beginPath();
//         ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
//         ctx.fillStyle="#DAE0E2";
//         ctx.fill();
//     }
//     this.update=function(){
//         this.y-=this.dy; 
//         this.draw();
//         console.log("draaw")
//     }
// }

// ;
// setInterval( function play(){
//     let circleArray=[];
//     let r=Math.floor(Math.random()*30);
//     let x=Math.floor(Math.random()*400);
//     let y=Math.floor(Math.random()*700);
//     for(let i=0;i<4;i++)
//         {
//             circleArray.push(new Circle(x,y,r,1));  
//             console.log(i);
//         }
//         console.log(circleArray);
    
//     ctx.clearRect(0,0,innerWidth,innerHeight); // just clear the whole game area
//     circleArray.forEach(c=>{ c.update();});
//     console.log("after foreach")
     
//  },1000)
// play();



    let c=document.getElementById("game-space");
    c.height=window.innerHeight;
    c.width=window.innerWidth;
    
    let ctx=c.getContext("2d");
                
    function Circle(x,y,r,dy){
        this.r=r;
        this.x=x;
        this.y=y;
        this.dy=dy;
  
    this.draw=function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle="#DAE0E2";
        ctx.fill();
    }
    this.update=function(){
        this.y-=this.dy; 
        this.draw();
        
    }

    this.touch = function(x,y) {
    
        this.type = 'touch';    // we'll need this later
        this.x = x;             // the x coordinate
        this.y = y;             // the y coordinate
        this.r = 5;             // the radius
        this.opacity = 1;       // inital opacity. the dot will fade out
        this.fade = 0.05;       // amount by which to fade on each game tick
        // this.remove = false;    // flag for removing this entity. POP.update
        // will take care of this
    
        this.update1 = function() {
            // reduct the opacity accordingly
            this.opacity -= this.fade; 
            // if opacity if 0 or less, flag for removal
            this.remove = (this.opacity < 0) ? true : false;
        };
    
        this.render = function() {
            
            POP.Draw.circle(this.x, this.y, this.r, 'rgba(255,0,0,'+this.opacity+')');
        };
    };
}

setInterval( function play(){
    let circleArray=[];
    let r=Math.floor((Math.random()*30)+10);
    let x=Math.floor(Math.random()*500);
    let y=Math.floor(Math.random()*700);
    for(let i=0;i<4;i++)
        {
            circleArray.push(new Circle(x,y,r,1));  
        }

    ctx.clearRect(0,0,innerWidth,innerHeight); // just clear the whole game area
    circleArray.forEach(c=>{ c.update();});
    // c.touch(x,y);
    console.log("after foreach")
     
 },500)




    
    