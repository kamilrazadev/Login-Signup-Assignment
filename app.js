const username = document.getElementById("username")
const pass = document.getElementById("password")

const signUpHeading = document.getElementById("signup-heading")
const loginHeading = document.getElementById("login-heading")

const loginBtn = document.getElementById("login-btn")
const signUpBtn = document.getElementById("signup-btn")


const signUpUser = () => {
    
    if(username.value == "" || pass.value == ""){
        return alert("All fields are required!")
    }
    
    localStorage.setItem("username",username.value)
    localStorage.setItem("password",pass.value)

    alert("Sign Up Successfully")

    signUpHeading.style.display = "none"
    signUpBtn.style.display = "none"

    loginHeading.style.display = "block"
    loginBtn.style.display = "block"

    username.value = ""
    pass.value = ""
}

const loginUser = () => {
    
    const storedUsername =  localStorage.getItem("username")
    const storedPass = localStorage.getItem("password")

    if(storedUsername == username.value && storedPass == pass.value){
        alert("Login Successfully")
    } else {
        alert("Invalid Details")
    }
}

const changePage = (page) => {

    if(page == "login") {
        signUpHeading.style.display = "none"
        signUpBtn.style.display = "none"
    
        loginHeading.style.display = "block"
        loginBtn.style.display = "block"
    
    } else {
        signUpHeading.style.display = "block"
        signUpBtn.style.display = "block"
    
        loginHeading.style.display = "none"
        loginBtn.style.display = "none"
    
    }
    
    username.value = ""
    pass.value = ""
}

// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }
// jonas.calcAge()

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge()

// function check () {
//     console.log(this);
// }

// check()