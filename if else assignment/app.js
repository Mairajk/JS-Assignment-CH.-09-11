let comment = "" ;
let city = prompt(" Enter City Name ") ;
if (city === "Karachi") {
    comment =  "Welcome To City Of Lights"
} else {
    comment = " Please Enter Karachi "
} ;

document.querySelector("#city").innerHTML = comment ;




let gendermessege = "" ;
let gender = prompt ("Please Enter Your Gender") ; 

if (gender === "male") {
    gendermessege = " Good Morning Sir "
}
 else if ( gender === "female") {
    gendermessege = " Good Morning Ma'am "
}
 else {
     gendermessege = " Good Morning "
 }

 document.querySelector("#gender").innerHTML = gendermessege ;


 let t_Color = prompt("Enter Color Of Traffic Light") ; 
 
 let color_mean = "" ; 
 
    if (t_Color == "red") {
     color_mean =  "Must Stop"
 }  else if (t_Color == "yellow") {
     color_mean = "Ready To Move"
 }  else if (t_Color == "green" ) {
     color_mean = " Move Now "
 }  else{
     color_mean = " Please Enter Valid Color "
 } ;

 document.querySelector("#traffic").innerHTML = color_mean ;



 let cFuel = prompt(" Enter Your Current Fuel In Liter ") ; 
 let fAlert = "" ;

 if ( cFuel > 0.25) {
     fAlert = " Please refill the fuel in your car " 
    //   document.querySelector("#fAlert").style.color = "red" ;
 } else {
     fAlert = " Your fuel is enough to go  " 
    //   document.querySelector("#fAlert").style.color = "green" ;
 } ;

 document.querySelector("#fALert").innerHTML = fAlert ;