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

        function drawdiscs(){
            clear();
            console.log("afer clear")
            // console.log(towers)
            for(let i=0;i<3;i++)
            {
                if(!jQuery.isEmptyObject(towers[i][0]))
                {
                    for(let j=0;j<=towers[i][0].length;j++)
                    {
                        console.log(towers[i][0][j])
                        towers[i][1].append(
                            $(
                                "<li id='disc"+
                                towers[i][0][j]+
                                "' value='"+
                                towers[i][0][j]+
                                "'></li>"
                                ));
                        
                    }
                    console.log("sdgf")
                }
            }
        }

        function handle(tower){
            console.log("in handle")
            if(hold==null){
                if(!jQuery.isEmptyObject(towers[tower][0])){
                    hold=tower;
                    towers[hold][i].children().last().css("margin-top","-170px")
                }
            }
            else{
                let move=moveDisc(hold,tower);
                moves+=1;
                $(".moves").text(moves+" moves");
                if(move==1){
                    drawdiscs();
                }
                else{
                    alert("you can't place bigger disc on smaller one");
                }
                hold=null;
            }
            if(solved()) $(".moves").text("solved with "+ moves+" moves");
        }

        function moveDisc(a,b)
        {
            let from=towers[a][0];
            let to=towers[b][0];
            if(from.length==0) return 0;
            else if(top.length===0){
                to.push(from.pop());
                return 1;
            }else if(from[from.length-1] > to[to.length-1]){
                return 0;
            }else{
                to.push(from.pop());
                return 1;
            }
        }

        function solved(){
            if(
                jQuery.isEmptyObject(towers[0][0])&&
                jQuery.isEmptyObject(towers[1][0])&&
                towers[2][0].length==discs
                )
                return 1;
                else return 0;
        }
        $(".t").click(function(){
            handle($(this).attr("value"));
        });
        $("#restart").click(function(){
             discs=document.getElementById("box").value;
            init();
        });
        init();
});