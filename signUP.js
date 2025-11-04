window.onload = function() {
  var age = prompt("Please enter your age:");
  if (age >= 18) {
    alert("You are eligible to sign up.");
    
  } else {
    alert("You must be at least 18 years old to sign up.");
    // إما تعيد التوجيه لصفحة أخرى مثلاً:
    window.location.href = "index.html"; 
    // document.body.innerHTML = "<h2>Access denied. You must be at least 18 years old.</h2>";
  }
};
var form = document.getElementById("signUpForm");

form.onsubmit = function (event) {
  var email = document.getElementById("email").value;
  if (email.trim() === "") {
    alert("Please enter your email.");
    event.preventDefault(); // يمنع إرسال الفورم
  }
};

