$('<button class="pure-button pure-primary-button full" style="color:#000000 background-color:#ff0000;" id="cheat_button" type="button" style="background-color:red;">Click here for Answers Bot !</button>').insertAfter('#start');
$('<span><p>Checkout my Profile on:<b><a href="https://www.instagram.com/theswapnilsaste"> >>>> Instagram <<<< </a></b><br/> </p></span>').insertAfter('#start');
$('<span><p>Due to Technical issues, this might not always submit your score, but it will always reveal the answers.<br/>Thank You! :)</p></span>').insertAfter('#start');
function answerMachine() {
    document.getElementById("start").click();
    setTimeout(function(){alert("wait...");}
    ,3000)
    setTimeout(function(){alert("Swapnil Saste: Script Started, Follow me on instagram: @theSwapnilSaste");}
    ,1000);
    for(i = 1; i<= 20; i++) {
    
        setTimeout(function () {
            document.getElementsByClassName("correct")[0].click();
        }, (i+1)*3000);
    console.log("hi");  
    }
}

$('#cheat_button').on( "click", function() {
    counter = 0;
    cheat_score = false;
    answerMachine();  
});