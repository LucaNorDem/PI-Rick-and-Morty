
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export  function validation(inputs){
    const errors = {};    

    if(!inputs.email){
        errors.email = "Se requiere un email";
    }else if(!regexEmail.test(inputs.email)){
        errors.email = "Debe ser un correo electrónico";
    }

    

    if(!inputs.password){
        errors.password = "Se requiere un password"
    }else if(inputs.password.length < 6 || inputs.password.length > 10 ){
        errors.password = "El password debe tener entre 6 y 10 caracteres"
    }else if(!/\d/.test(inputs.password)){
        errors.password = "El password debe incluir al menos un numero"
    }
    
    

    return errors;
}
