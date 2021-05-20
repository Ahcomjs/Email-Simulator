const sendBtn = document.querySelector('#send');



eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', AppInit);
}

function AppInit(){
    sendBtn.disabled = true;
}
