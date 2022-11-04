//Selectors

var salutation = document.getElementById("salutation");

console.log("Hello there");




function realTime(){
//Passing the values to the varibles
var myTime = new Date();
var newHours = myTime.getHours();
var newMins = myTime.getMinutes();
var newSecondss = myTime.getSeconds();
var closure = "AM"

if(newHours<11){
    salutation.innerHTML = "GOOD MORNING DERRICK!";
} else if(newHours>11 && newHours < 16){
    salutation.innerHTML = "GOOD AFTERNOON DERRICK!";
} else{
    salutation.innerHTML = "GOOD EVENING DERRICK!";
}

if(newHours>11){
    var closure = "PM"
    newHours=newHours-12;
}

document.getElementById('time').innerHTML = newHours+" : "+newMins+" : "+newSecondss+" "+closure; 

var myTime = setTimeout(realTime, 500);
}


