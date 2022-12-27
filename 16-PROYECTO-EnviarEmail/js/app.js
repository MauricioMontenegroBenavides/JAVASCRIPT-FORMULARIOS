// Variables 
const enviar=document.querySelector('#enviar')
const email=document.querySelector('#email')
const asunto=document.querySelector('#asunto')
const mensaje=document.querySelector('#mensaje')
const EnviarMail=document.querySelector('#enviar-mail')
const aumenta=document.querySelector('#aumenta')
const resultado=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


function eventos(){
    //Al iniciar la app
    document.addEventListener('DOMContentLoaded',iniciar)
    //Campos del formulario
    email.addEventListener('blur',validar)
    asunto.addEventListener('blur',validar)
    mensaje.addEventListener('blur',validar)
    EnviarMail.addEventListener('submit',Enviar)
}
eventos()

// Funciones
function iniciar(){
    console.log('iniciando')
    enviar.disabled=true;// Se utiliza un framework de css que se llama teldwin similar a bootstrap 
    enviar.classList.add('cursor-not-allowed','opacity-50')
}

function validar(e){
      if(e.target.value.length>0){
        const borrar=document.querySelectorAll('.casos')
        e.target.classList.add('border','border-green-400')
        aumenta.innerHTML=''
      }else{
        e.target.classList.remove('border','border-green-400','error')
        e.target.classList.add('border','border-red-500','error')
        mostrarError('Todos los campos son obligatorios ') 
      }
                                   
      if(e.target.type==='email'){
           if(resultado.test(e.target.value)){
 
          }else{
            mostrarError('email NO valido')
            }
      }
 
      if(resultado.test(email.value) && mensaje.value !=='' && asunto.value !==''){
        console.log('bien')
        enviar.disabled=false;
        enviar.classList.remove('cursor-not-allowed','opacity-50')
      } else{
        
      } 
}

function mostrarError(err){
  const mensajeError=document.createElement('p');
  mensajeError.textContent=err
  mensajeError.classList.add('border','border-red-500','casos')// Segunda forma de poner los estilos 
  const errores=document.querySelectorAll('.casos');
  if(errores.length==0){
  aumenta.appendChild(mensajeError)
  }
}

function Enviar(e){
   
  e.preventDefault()
  console.log('enviando')
}