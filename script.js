/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
function login(){
  var uname = document.getElementById("username").value;
  var pword = document.getElementById("password").value;
  
  if (uname == "Joe" && pword == "M4ma!"){
    
    alert("Welcome, you are now logged in!")
    document.ElementById("myImg").src="https://bcs-computing.co.uk/cat.jpg";
    
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