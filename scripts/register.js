class User {
    constructor(firstName, lastName, email, password, age, address, cardNumber, phone, color){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.address = address;
        this.cardNumber = cardNumber;
        this.phone = phone;
        this.color = color;
    }
}

function isValid(user){
    let valid=true;
    $("input").removeClass("input-error");
    if(user.email.length==0){
        valid=false;
        $('#txtEmail').addClass("input-error");
    }
    if (user.password==0){
        valid=false;
        console.log("You need to enter a password.")
    }
    if(!valid){
        displayError("Missing data");
    }
    return valid;
}

function validatePass(){
    let txtPass=$("#txtPassword");
    let password=txtPass.val();

    if(password.length<6){
        txtPass.css("border", "2px solid red"); //jQuery function
        displayError("Error: password too short!");
    }else{
        txtPass.css("border", "2px solid green");
        hideError();
    }
}
function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);

}
function hideError(){
    $("#alertError").addClass("hide");
}
function register(){
    let inputFirstName = $('#txtFirstname').val();
    let inputLastName = $('#txtLastname').val();
    let inputEmail = $('#txtEmail').val();
    let inputPassword = $('#txtPassword').val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();
    let inputCardNumber = $('#txtCardNumber').val();
    let inputPhone = $("#txtPhone").val();
    let inputColor = $("#txtColor").val();


    //create theUser
    let theUser = new User(inputFirstName,inputLastName,inputEmail,inputPassword,inputAge,inputAddress,inputCardNumber,inputPhone,inputColor);
    if(isValid(theUser)){
        saveUser(theUser);
        $("input").val("");
    }
    //validate the user *** Extra HW
}

function init(){
    console.log("Registration");
    //hook events
    $("#txtPassword").change(validatePass);
}
window.onload=init;