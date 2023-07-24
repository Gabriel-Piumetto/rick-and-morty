const validation = (data)=>{

    let errors={}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

     
    if(!data.email){ errors.email1 ='El nombre de usuario no puede estar vacío.'}
    
    
    if (!regexEmail.test(data.email)) {
        errors.email2 = 'El nombre de usuario debe ser un email válido.';
    }

    if(data.email.length > 35){ errors.email3 ='El nombre de usuario no puede tener más de 35 caracteres.'}

    if(!/\d/.test(data.password) ){

        errors.password1 = 'La contraseña tiene que tener al menos un número.'

    }

    if (data.password.length<6 || data.password.length>10){
        errors.password2 = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres.'
    }

   return errors
}

export default validation