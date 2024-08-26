const text = document.getElementById("username");
const pass = document.getElementById("password");
const error = document.getElementById("error-message");
const loginContainer = document.getElementById("box");
//   user data
let correctUsername = " ";
let correctPassword = " ";

const btn = document.querySelector("button");
btn.addEventListener("click", login);

//   button login function
function login() {
  if (text.value === correctUsername && pass.value === correctPassword) {
    // alert("welcome chandan");
    error.style.display = "none";
    text.value = "";
    pass.value = "";
    loginContainer.style.display = "none";
    let newBox = document.createElement("p");
    newBox.innerHTML = ` `;
    loginContainer.after(newBox);
  } else {
    text.value = "";
    pass.value = "";
    error.style.color = "red";
    error.style.display = "block";
  }
}

//   signup function
let signup = document.getElementById("signUp");
signup.addEventListener("click", page);

function page() {
  loginContainer.style.display = "none";
  let formDiv = document.createElement("div");
  // created form for signup by javascript
  formDiv.innerHTML = `<div class="signup-container">
        <h2>Signup</h2>
        <input type="text" id="fullname" placeholder="Full Name">
        <input type="email" id="email" placeholder="Email">
        <input type="password" id="pass" placeholder="Password">
        <input type="password" id="confirm-password" placeholder="Confirm Password">
        <button id="upsign">Signup</button>
        <p class="error-message" id="error-messag"></p>
    </div>`;
    // attached with logincontainer
  loginContainer.after(formDiv);

  let upsign = document.getElementById("upsign");
// event listener for  signup click
  upsign.addEventListener("click", () => {
    const fullName = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    const confirmPassword = document.getElementById("confirm-password");
    const errormsg = document.getElementById("error-messag");

    console.log(fullName.value);
    console.log(email.value);
    console.log(password.value);
    console.log(confirmPassword.value);
    
    if (fullName.value === "" ||
      email.value === "" ||
      password.value === "" ||
      confirmPassword.value === "") {
      errormsg.style.display = "block";
      errormsg.innerText = "All fields are required.";

      // if user any field is not filled then all value will be again null
      fullName.value="";
      email.value="";
      password.value="";confirmPassword.value="";
      return;
    } 

    else if (password.value !== confirmPassword.value) {
      errormsg.style.display = "block";
      errormsg.innerText = "Passwords do not match.";
      return;
    }
    else{
      alert("Signup successful!");
      errormsg.style.display = "none";
      // here after successfully signup the form is displayed as none
      formDiv.style.display="none";
      // and again the login page has been 
      loginContainer.style.display = "block";

      correctUsername=email.value;
      console.log(correctUsername)
      correctPassword=password.value;

// removing the uservalue
      fullName.value="";
      email.value="";
      password.value="";confirmPassword.value="";

    }
  });
}
