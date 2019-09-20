$(document).ready(function(){
        // let towers=[[[],$(".line1")],[[],$(".line2")],[[],$(".line3")]],
        let towers=[[[]],[[]],[[]]]
        // towers[0][1]=
        towers.push(document.getElementsByClassName("line1"));
        towers.push(document.getElementsByClassName("line2"));
        towers.push(document.getElementsByClassName("line3"));
        console.log(towers[0][1]);
        // towers[1][1]=document.getElementsByClassName("line2");
        // towers[2][1]=document.getElementsByClassName("line3");
        moves=0;
        discs=null;
        hold=null;
        // function clear(){
        //     towers[0][1].remove();
        //     towers[1][1].remove();
        //     towers[2][1].remove();
        // }

        

        $("#restart").click(function(){
             discs=document.getElementById("box").value;
            init();
        });
        init();
});