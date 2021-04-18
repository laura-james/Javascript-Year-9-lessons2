/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function login() {
  var uname = document.getElementById("username").value;
  var pword = document.getElementById("password").value;

  if (uname == "Bob" && pword == "cake") {
    document.getElementById("login").innerHTML = "Logging you in...";
    sleep(1000);

    document.getElementById("testerPanel").style.display = "block";
    document.getElementById("testerPanel").style.display = "block";
    document.getElementById("loginPanel").style.display = "none";
  } else {
    alert("Incorrect login - please try again");
    document.getElementById("myImg").src =
      "https://bcs-computing.co.uk/dog.jpg";
    document.getElementById("testerPanel").style.display = "none";
    document.getElementById("loginPanel").style.display = "block";
  }
}
function testLove() {
  var name1 = document.getElementById("name2").value;
  var name2 = document.getElementById("name1").value;

  var rand = Math.floor(Math.random() * 100);

  document.getElementById("msg").innerHTML =
    name1 + " loves " + name2 + ": " + rand + "%";
  if (rand < 50) {
    document.getElementById("result").innerHTML =
      "<span style='color: red;'>Looks like it won't work out for you guys.</span>";
  } else if (rand < 60) {
    document.getElementById("result").innerHTML =
      "<span style='color: #d627b0;'>It's unlikely to happen.</span>";
  } else if (rand < 80) {
    document.getElementById("result").innerHTML =
      "<span style='color: purple;'>There's DEFINITELY a chance.</span>";
  } else if (rand < 100) {
    document.getElementById("result").innerHTML =
      "<span style='color: blue;'>I reckon you're in luck!</span>";
  } else {
    document.getElementById("result").innerHTML =
      "<span style='color: gold;'>It's a perfect match!</span>";
  }
}

function generate() {
  var multiplier = document.getElementById("text").value;
  document.getElementById("msg").innerHTML = "";
  for (var i = 0; i < 11; i++) {
    var output = document.getElementById("msg").innerHTML;
    // output = output + i + "x" + text + " = " + i * 8 + "<br>";
    document.getElementById("msg").innerHTML = output;
  }
}

function encrypt() {
  var word = document.getElementById("plaintext").value;
  for (var i = 0; i < word.length; i++) {
    alert(word.charCodeAt(i));
    alert(String.fromCharCode(word.charCodeAt(i)))
  }
}


//ROCK PAPER SCISSORS
var myscore = 0;
var compscore = 0;
function playgame() {
  //get the computer's random choice
  var compchoice = Math.random() * 3;
  compchoice = Math.floor(compchoice);
  var choices = ["rock", "paper", "scissors"];
  document.getElementById("msg").innerHTML = choices[compchoice];
  //get value user typed
  var userchoice = document.getElementById("choice").value;
  //set it to either 0,1,2 to make it easier to compare with compchoice
  if (userchoice == "rock") {
    userchoice = 0;
  } else if (userchoice == "paper") {
    userchoice = 1;
  } else {
    userchoice = 2;
  }
  // write the algorithm for working out who wins below this line VVVVV
  if (compchoice == userchoice) {
    document.getElementById("result").innerHTML = "DRAW";
  } else if (
    (compchoice == 0 && userchoice == 1) ||
    (compchoice == 1 && userchoice == 2) ||
    (compchoice == 2 && userchoice == 0)
  ) {
    document.getElementById("result").innerHTML = "USER WINS";
  } else {
    document.getElementById("result").innerHTML = "COMPUTER WINS";
  }
} //end of function

