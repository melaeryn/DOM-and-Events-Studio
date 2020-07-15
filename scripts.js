// Write your JavaScript code here.
// Remember to pay attention to page loading!
let launch = null;
let land = null;
let abort = null;
let up = null;
let down = null; 
let left = null;
let right = null;

let flight = null;
let shuttleheight = null;
let flightStat = null;
let shuttleBack = null;
let rocket = null;



window.addEventListener("load", function(){
    launch = document.getElementById("takeoff");
    shuttleBack = document.getElementById("shuttleBackground");
    flightStat = document.getElementById("flightStatus");
    shuttleheight = document.getElementById("spaceShuttleHeight");
    land = document.getElementById("landing");
    abort = document.getElementById("missionAbort");
    up = document.getElementById("up");
    down = document.getElementById("down");
    left = document.getElementById("left");
    right = document.getElementById("right");
    rocket = document.getElementById("rocket");

    launch.addEventListener("click", function(){
        flight = window.confirm("Confirm that shuttle is ready for takeoff.");
        if(flight === true){
            flightStat.innerHTML = "Shuttle in Flight.";
            shuttleBack.style.background = "blue";
            shuttleheight.innerHTML = Number(shuttleheight.innerHTML) + 10000;
        }
    });


    land.addEventListener("click", function(){
        flight = window.alert("The shuttle is landing. Landing gear engaged.");
        flightStat.innerHTML = "The shuttle has landed.";
        shuttleBack.style.background = "green";
        shuttleheight.innerHTML = 0;
        rocket.style.position = "relative";
        rocket.style.left = "0px";
        rocket.style.top = "0px";
    });

    abort.addEventListener("click", function(){
        flight = window.confirm("Confirm that you want to abort mission.");
        if(flight === true){
            flightStat.innerHTML = "Mission aborted.";
            shuttleBack.style.background = "green";
            shuttleheight.innerHTML = 0;
            rocket.style.position = "relative";
            rocket.style.left = "0px";
            rocket.style.top = "0px";

        }
    });

    let shuttlePosition = 0;
    down.addEventListener("click", function(){
        shuttleheight.innerHTML = Number(shuttleheight.innerHTML) - 10000;
        shuttlePosition += 10;
        rocket.style.position = "relative";
        rocket.style.top = (shuttlePosition)+"px";
    });

    up.addEventListener("click", function(){
        shuttleheight.innerHTML = Number(shuttleheight.innerHTML) + 10000;
        shuttlePosition -= 10;
        rocket.style.position = "relative";
        rocket.style.top = (shuttlePosition)+"px";
    });

    let shuttleY = 0;
    right.addEventListener("click", function(){
        shuttleY += 10;
        rocket.style.position = "relative";
        rocket.style.left = (shuttleY)+"px";
    });

    left.addEventListener("click", function(){
        
        shuttleY -= 10;
        rocket.style.position = "relative";
        rocket.style.left = (shuttleY)+"px";
    });

})
