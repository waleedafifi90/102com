'user-strict';


var name = prompt("Please enter your name", "Waleed");
document.getElementById('Username').innerHTML  = name + " This is " ;

function getCatINformationFromUser() {
    var color = prompt("Type your fav color", "white");
    var age = prompt("Type the age you need", "1");
    var name = prompt("Type name you want to register with", "felfel");

    if (age <= 1) {
        age = age + " Kitty";
    } else {
        age = age + " Adult";
    }
    console.log('You have enter: ' + color + ',' + age + ',' + name);
    document.getElementById('user-needs').innerHTML = "<table><tr><td>name</td><td>"+ name +"</td></tr><tr><td>age</td><td>"+ age +"</td></tr><tr><td>color</td><td>"+ color +"</td></tr></table>";
}

function confirmFunction() {
    confirm("Press a button!");
}