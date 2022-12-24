
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexString = /^\d+$/;

function isCharNumber(c) {
   return c >= '0' && c <= '9';
 }



export default function validation(inputs) {
    var errors       =  {}  ;

 
  
    if (!inputs.username) {
      errors.username    = 'No puede estar vacio'       ;
   }  if (!regexEmail.test(inputs.username)) {
      errors.username   = 'Debe ser un formato de correo electrónico';
   }  if (inputs.username.length > 35) {
      errors.username   = 'No puede tener más de 35 caracteres';
   }  if (inputs.password){
       let num = false ;
       for (let i = 0; i < inputs.password.length; i++) {
         const element = inputs.password.charAt(i) ;
         if (isCharNumber(element)) {
            num = true
         }
       }
       if (!num) {
         errors.password =  'tiene que tener al menos un número'
       }
                  
   }  if (inputs.password.length <6 || inputs.password.length > 10){
      errors.password = 'Tiene que tener una longitud entre 6 y 10 caracteres'                ;
   }  
  
   return errors            ;
  
  }