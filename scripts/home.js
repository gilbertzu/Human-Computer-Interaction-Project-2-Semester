// image slider
$(function(){
    $(".slide").hide();

    var currImg = $(".slide").first();
    currImg.show();

    var currIdx = 0;

    $(".next").click(function(){
        currImg.hide();
        if(currIdx == $(".slide").length-1){
            currIdx = 0;
            currImg = $(".slide").first();
        }else{
            currIdx += 1;
            currImg = currImg.next();
        }
        currImg.show(0);
    })

    $(".prev").click(function(){
        currImg.hide();
        if(currIdx == 0){
            currIdx = $(".slide").length-1;
            currImg = $(".slide").last();
        }else{
            currIdx -= 1;
            currImg = currImg.prev();
        }
        currImg.show(0);
    })
})