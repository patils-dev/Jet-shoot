$(document).ready(function(){
      
        $(".t").click(function(){
            handle($(this).attr("value"));
        });
        $("#restart").click(function(){
             discs=document.getElementById("box").value;
            init();
        });
        init();
});