/*if(document.getElementById("btn test")){
    document.getElementById("btn test").addEventListener("click", testFunc());
}
*/
function testFunc(){
    if(document.getElementById("appMain").innerHTML == "Hello<br>World!"){
        document.getElementById("appMain").innerHTML = "Goodbye World!";
    }
    else{
        document.getElementById("appMain").innerHTML = "Hello<br>World!";
    }
    
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn test").addEventListener("click", function() { testFunc();
    });
});














//http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXXXXXXXX&steamids=76561197960435530
//Key: DD34C283C4D69006A22A5C70917621D5