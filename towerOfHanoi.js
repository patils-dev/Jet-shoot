$(document).ready(function(){
        let towers=[[[],$(".line1")],[[],$(".line2")],[[],$(".line3")]],
        moves=0;
        discs=null;
        hold=null;
        function clear(){
            towers[0][1].empty();
            towers[1][1].empty();
            towers[2][1].empty();
        }

        function init(){
            clear();
         towers=[[[],$(".line1")],[[],$(".line2")],[[],$(".line3")]],
            moves=0;
            discs=document.getElementById("box").value;
            hold=null;
            for(let i=discs;i>0;i--)
            {
                towers[0][0].push(i);
            }
            console.log(towers)
            drawdiscs();
            console.log("after draw")
            $(".moves").text(moves+" moves");
        }

        $("#restart").click(function(){
             discs=document.getElementById("box").value;
            init();
        });
        init();
});