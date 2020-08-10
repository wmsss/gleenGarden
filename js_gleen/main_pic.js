window.onload = function () {

    var current = 1;
    var next = current+1;
    var totalNum = 3;
   
    for(i = 1; i <= totalNum; i++){
        $("#m_main_"+i).css("opacity", "0");
    }
    //$("#main_pic1").css("opacity", "0");
    //$("#main_pic2").css("opacity", "0");
    //$("#main_pic3").css("opacity", "0");

    $("#m_main_"+current).css("opacity", "1");

    
    //$("#main_pic1").css("transition", "all 1s");
    //$("#main_pic2").css("transition", "all 1s");
    //$("#main_pic3").css("transition", "all 1s");
    
    
    var transitionSet = setInterval(function(){
    
        for(i = 1; i <= totalNum; i++){
            $("#m_main_"+i).css("transition", "all 1s");
        }
        clearInterval(transitionSet);
    }, 2000);

    setInterval(function(){
        
        $("#m_main_"+current).css("opacity", "0");
        $("#m_main_"+next).css("opacity", "1");
        if(current == 3){
            current = 1;
        }else{
            current++;
        }
        if(next == 3){
            next = 1;
        }else{
            next = current+1;    
        }
    }, 2000);


}
