/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
function login(){
  var uname = document.getElementById("username").value;
  var pword = document.getElementById("password").value;
  
  if (uname == "Joe" && pword == "M4ma!"){
    
    alert("Welcome, you are now logged in!")
    document.getElementById("myImg").src="https://bcs-computing.co.uk/cat.jpg";
    
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
    document.getElementById("result").innerHTML = "Looks like it won't work out for you guys.";
  }else if(rand<60){
    document.getElementById("result").innerHTML = "It's unlikely to happen.";
  }else if(rand<80){
    document.getElementById("result").innerHTML = "There's DEFINITELY a chance.";
  }else{
    document.getElementById("result").innerHTML = "I reckon you're in luck!";
  }
}