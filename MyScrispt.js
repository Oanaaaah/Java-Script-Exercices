function testNumber(){
    var n = document.getElementsByTagName("input")[0].value;

    if(n % 10 == 0) {
        document.getElementById("result").innerHTML = "true";
    }
    else {
        document.getElementById("result").innerHTML = "false";
    }
}


function tellFortune(){
    var n = document.getElementById("number_of_childs").value;
    var z = document.getElementById("partener_name").value;
    var x = document.getElementById("area").value;
    var y = document.getElementById("job").value;
    
    document.getElementById("tellFortune").innerHTML = "You will have " + n + " children with " + z + " and you will work as a " + y + " in " + x + "." ;
}



function tellDayOfTheWeek(){
var n = document.getElementById("day").value;

if(n==1) {
    document.getElementById("tellDayOfTheWeek").innerHTML = "Monday" 

}

else if(n==2) {
    document.getElementById("tellDayOfTheWeek").innerHTML = "Tuesday" 
}

else if(n==3){
    document.getElementById("tellDayOfTheWeek").innerHTML = "Wednesday" 
}

else if(n==4){
    document.getElementById("tellDayOfTheWeek").innerHTML = "Thursday" 
}
else if(n==5) {
    document.getElementById("tellDayOfTheWeek").innerHTML = "Friday" 
}

else if(n==6){
    document.getElementById("tellDayOfTheWeek").innerHTML = "Saturday" 
}

else {
    document.getElementById("tellDayOfTheWeek").innerHTML = "Sunday"}

}