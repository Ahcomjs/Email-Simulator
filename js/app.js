const sendBtn = document.querySelector('#send');

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
        vent.target.classList.add('error');
        showError();
    }
   
}

function showError(){
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'All Fields are required';
}