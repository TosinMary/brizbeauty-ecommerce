function validation() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    
    error_message.style.padding = "5px";
    
    if(name.length < 5) {
        text = "Please Enter Vaild Name";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 11) {
        text = "Please Enter Vaild Phone Number Not More Than 11 Numbers";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == 1 || email.length < 6 ){
        text = "Please Enter Vaild Email";
        error_message.innerHTML = text;
        return false;
    
    }
    if(password.length < 8 || password.search(/[A-Z]/i) < 0 || password.search(/[!@#$%^&*]/i) < 0 ) {
    text = "Please Enter A Password That Has A Capiatal Letter,Special character,A Number And Is Not Lesser Than 8 Characters";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length < 20){
        text = "Please Enter Vaild Message";
        error_message.innerHTML = text;
        return false;
    }
    alert("Click On Submit!")
    return true;
    }
    