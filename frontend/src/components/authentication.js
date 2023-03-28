import {app,auth,database} from "../index";

function validateEmail(email){
    let expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if(expression.test(email) === true){
        return true;
    }else{
        return false;
    }
}

function validatePassword(password){
    //password must be greater than given length
    if(password<6){
        return false;
    }else{
        return true;
    }
}

function validateField(field){
    if(field == null){
        return false;
    }
    if(field.length <= 0){
        return false;
    }else{
        return true;
    }
}

export {validateEmail,validatePassword,validateField};