import React from "react";



const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export default function validation(inputs) {
    var errors       =  {}  ;
  
    if (!inputs.name) {
      errors.name    = 'Se requiere un correo electrónico'       ;
   }  if (!regexEmail.test(inputs.name)) {
      errors.name   = 'Debe ser un formato de correo electrónico';
   }  if (inputs.password <= 0){
      errors.password   = 'al menos 1 numero'                    ;
   }  if (inputs.password == ''){
      errors.password = 'Se requiere un password'                ;
   }  
   
  
   return errors            ;
  
  }