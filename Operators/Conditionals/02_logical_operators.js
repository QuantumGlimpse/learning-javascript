let age = 20;
let hasID = true;

if(age >= 20 && hasID){
    console.log("You can enter the club.");
}else{
    console.log("You cannot enter the club.");
}



let isMember = false;

if (age>=18 || isMember) {
    console.log("You can enter the club.");
}else{
    console.log("You cannot enter the club.");
}


if (!hasID) {
    console.log("You cannot enter the club.");
}else{
    console.log("You can enter the club.");
}

let Username = "admin";
let Password = "1234";

Username === "admin" && Password === "1234" ? console.log("Access granted") : console.log("Access denied");