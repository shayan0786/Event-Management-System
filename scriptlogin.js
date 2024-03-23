function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  if (username === "admin" && password === "password") {
      alert("Login successful!");
      return true;
  } else {
      alert("Invalid username or password!");
      return false;
  }
}

function register() {
  var confirmed = confirm("Are you sure you want to go to the registration page?");
  if (confirmed) {
      window.location.href = "registration.html"; 
  }
}
