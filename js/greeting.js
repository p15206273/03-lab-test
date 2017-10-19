(function(){

  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let name = document.getElementById("name");
  
  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
	
	name.innerHTML = userName.value;

    ev.preventDefault();
  }

  getName.addEventListener("submit", PerformGreeting);
  
}());
