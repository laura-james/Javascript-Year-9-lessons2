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

function login(){
  var uname = document.getElementById("username").value;
  var pword = document.getElementById("password").value;
  
  if (uname == "Joe" && pword == "M4ma!"){
    
    document.getElementById("login").innerHTML = "Logging you in...";
    sleep(1000)
    
    document.getElementById("testerPanel").style.display="block";
    document.getElementById("testerPanel").style.display="block";
    document.getElementById("loginPanel").style.display="none";
  }else{
    alert("Incorrect login - please try again") ;
    document.getElementById("myImg").src="https://bcs-computing.co.uk/dog.jpg";
    document.getElementById("testerPanel").style.display="none";
    document.getElementById("loginPanel").style.display="block";
  }
}
function testLove(){
  var name1 = document.getElementById("name2").value;
  var name2 = document.getElementById("name1").value;
  
  var rand = Math.floor(Math.random() * 100);
  
  document.getElementById("msg").innerHTML =name1 + " loves " + name2 +": " +rand +"%";
  if(rand<50){
    document.getElementById("result").innerHTML = "<span style='color: red;'>Looks like it won't work out for you guys.</span>";
  }else if(rand<60){
    document.getElementById("result").innerHTML = "<span style='color: #d627b0;'>It's unlikely to happen.</span>";
  }else if(rand<80){
    document.getElementById("result").innerHTML = "<span style='color: purple;'>There's DEFINITELY a chance.</span>";
  }else if(rand<100){
    document.getElementById("result").innerHTML = "<span style='color: blue;'>I reckon you're in luck!</span>";
  }else{
    document.getElementById("result").innerHTML = "<span style='color: gold;'>It's a perfect match!</span>";
  }
}