'user-strict';


var name = prompt("Please enter your name", "Waleed");
document.getElementById('Username').innerHTML  = name + " This is " ;

function getCatINformationFromUser() {
    var color = prompt("Type your fav color", "white");
    var age = prompt("Type the age you need", "1");
    var name = prompt("Type name you want to register with", "felfel");
    var numbrtOfCats = prompt('How many cats do you need?', '1');

    while ( age === '' ) {
        age = prompt("Type the age you need", "1");
    }

    if (age <= 1) {
        age = age + " Kitty";
    } else {
        age = age + " Adult";
    }
    console.log('You have enter: ' + color + ',' + age + ',' + name + ',' + numbrtOfCats);
    document.getElementById('userNeedTable').innerHTML = "<tr><td>name</td><td>"+ name +"</td></tr><tr><td>age</td><td>"+ age +"</td></tr><tr><td>color</td><td>"+ color +"</td></tr>";

    for (i = 0; i < numbrtOfCats; i++) {
        document.getElementById('numberOfCats').innerHTML += '<img width="50px" height="50px" src="img/cat.png" />';
    }
}

function confirmFunction() {
    confirm("Press a button!");
}
