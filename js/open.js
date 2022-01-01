//Here we get the elements of the their id's
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const homeaddress = document.getElementById("address");
const phonenumber = document.getElementById("phone");
const occupation = document.getElementById("occupation");


let fn = false;
let ln = false;
let un = false;
let pw = false;
let pw2 = false;
let ha = false;
let ph = false;
let occu = false;


function updateInputs() {
    
    
    // here we optain the inputs and use .trim( to remove all the white spaces that might be entered by the user
    const usernameValue = username.value.trim()
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const password1Value = password1.value.trim()
    const password2Value = password2.value.trim()
    const homeaddressValue = homeaddress.value.trim()
    const phoneNumberValue = phonenumber.value.trim()
    const occupationValue = occupation.value.trim()

    if (firstnameValue === ""){
        onError(firstname, 'Please fill your firstname')
    } else{
        onSuccess(firstname)
        fn= true;
    }
    if (lastnameValue === ""){
        onError(lastname, 'Please fill your lastname')
    } else{
        onSuccess(lastname);
        ln = true;
    }
    if (usernameValue === ""){
        onError(username, 'Please fill your lastname')
    } else{
        onSuccess(username);
        un = true;
}
if (password1Value === "") {
        onError(password1, "Password can't be blank")
    } else {
        onSuccess(password1)
        pw = true;
    }

    if (password2Value === "") {
        onError(password2, "Password2 can't be blank")
    } else if(password1Value !== password2Value) {
        onError(password2, "Passwords do not match")
    } else {
        onSuccess(password2);
        pw2 = true;
    }


}



function onError(input, message) {
    const formSource = input.parentElement; // the div with .form-control class
    const small = formSource.querySelector("small");
    // Here we add whatever will be the value of message inside the small tag
    small.innerText = message;
    // Here we add the error class
    formSource.className = "source error";
}

function onSuccess(input) {
    const formSource = input.parentElement;
    formSource.className = "source success";
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    updateInputs();
});
