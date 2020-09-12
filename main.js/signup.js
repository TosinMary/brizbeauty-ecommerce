function validation() {
    var names = document.getElementById("names").value;
    var phones = document.getElementById("phones").value;
    var emails = document.getElementById("emails").value;
    var passwords = document.getElementById("passwords").value;
    var error_message = document.getElementById("error_message");
    var text;
    
    error_message.style.padding = "5px";
    
    if(names.length < 5) {
        text = "Please Enter Vaild Name";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phones) || phones.length != 11) {
        text = "Please Enter Vaild Phone Number Not More Than 11 Numbers";
        error_message.innerHTML = text;
        return false;
    }
    if(emails.indexOf("@") == 1 || emails.length < 6 ) {
        text = "Please Enter Vaild Email";
        error_message.innerHTML = text;
        return false;
    
    }
    if(passwords.length < 8 || passwords.search(/[A-Z]/i) < 0 || passwords.search(/[!@#$%^&*]/i) < 0 ) {
    text = "Please Enter A Password That Has A Capiatal Letter,Special character,A Number And Is Not Lesser Than 8 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!")
    return true;
    }
    