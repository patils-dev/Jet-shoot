POP.ctx.fillStyle = col;
        POP.ctx.beginPath();
        POP.ctx.arc(100 + 5, 100+ 5, r, 0,  Math.PI * 2, true);
        POP.ctx.closePath();
        POP.ctx.fill();
  
  window.addEventListener('load', POP.init, false);
  console.log("first1")
  window.addEventListener('resize', POP.resize, false);
  console.log("first2")
  