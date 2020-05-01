window.onload = ()=> {
    console.log(document.cookie);
    if(document.cookie.length!=0){
        var namearray = document.cookie.split("=");
        var theme = namearray[1];
        document.getElementById("content").style.backgroundColor = theme;
        if(theme =="black")
        document.getElementById("content").style.color = "aliceblue";
        else
        document.getElementById("content").style.color = "black";


    }
}



function setTheme()
{
    var theme = document.getElementById("theme").value;
    if(theme != "select")
    {
        document.cookie="color="+theme+";expires=Fri, 01 May 2020 01:00:00 UTC;";
        
        document.getElementById("content").style.backgroundColor = theme;
        if(theme =="black")
        document.getElementById("content").style.color = "aliceblue";
        else
        document.getElementById("content").style.color = "black";

        
    }

    
}