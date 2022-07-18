$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();


    var Error = true;
    var password_error = true;
    var confirm_password_error = true;

    $('#username').keyup(function(){
        username_validation();       
    });

    function username_validation(){
        var username_val = $('#username').val();
        if(username_val.length == ""){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username cannot be empty');
            $('#usernamevalidation').css('color', 'red');
            Error = false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }

        if(username_val.length<3 || username_val>10){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Invalid username');
            $('#usernamevalidation').css('color', 'red');
            Error = false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
    }


    $('#password').keyup(function(){
        password_validation();
    });

    function password_validation(){
        var password_val = $('#password').val();
        if(password_val.length == ""){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password cannot be empty');
            $('#passwordvalidation').css('color', 'red');
            password_error = false;
            return false;
        }

        else{
            $('#passwordvalidation').hide();
        }

        if(password_val.length<=8){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password must contain atleast 8 characters');
            $('#passwordvalidation').css('color', 'red');
            password_error = false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
        }
    }


    $('#confirmpassword').keyup(function(){
        confirm_password_validation();
    });

    function confirm_password_validation(){
        var confirm_password_val = $('#confirmpassword').val();
        var password_val = $('#password').val();
        if(password_val != confirm_password_val || password_val == ""){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('password did not match');
            $('#confirmpasswordvalidation').css('color', 'red', 'font-size', '2px');
            confirm_password_error=false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide()
        }
    }

    $('#email').keyup(function(){
        email_validation();
    });

    function email_validation(){
        var email_val = $('#email').val();
        var emailregex = new RegExp("^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/");
        var emailregexo = new RegExp("^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$");  
        if(emailregex.test(email_val) || emailregexo.test(email_val)){
            $('#emailvalidation').hide()
        }
        else{
            $('#emailvalidation').show();
            $('#emailvalidation').html('Invlid Email');
            $('#emailvalidation').css('color', 'red');
            password_error=false;
            return false;
        }
    }

    $('#submitvalidation').click(function(){
        username_validation();
        password_validation();
        confirm_password_validation();
        email_validation();
        if(Error==true && password_error==true && confirm_password_error==true && email_validation_error==true)
        {
            return true
        }
        else{
            return false
        }
    });
});
