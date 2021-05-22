const sendBtn = document.querySelector('#send');
const form = document.querySelector('#send-mail');

const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');


eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', AppInit);
    
    email.addEventListener('blur', formValidate);
    subject.addEventListener('blur', formValidate);
    message.addEventListener('blur', formValidate);
    

}

function AppInit(){
    sendBtn.disabled = true;
}


function formValidate(event){

    if(event.target.value.length > 0){
        console.log('Testing');
    }else{
        event.target.style.borderBottom = '2px solid red';
        showError();
    }
   
}

function showError(){
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'All Fields are required';
    errorMessage.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mb-5', 'text-center','error');

    const errors = document.querySelectorAll('.error');
    if(errors.length === 0){
        form.insertBefore(errorMessage, document.querySelector('.mb-10'))
    }

}