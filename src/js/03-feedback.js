import throttle from 'lodash.throttle';
 
function getFormStateFromLocalStorage() {
    return JSON.parse(localStorage.getItem('feedback-form-state')) || {};
}

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.querySelector('.feedback-form');
    const emailInput = feedbackForm.querySelector('input[name="email"]');
    const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

    
    const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};


    emailInput.value = savedState.email || '';
    messageTextarea.value = savedState.message || '';

    
    const saveFormState = () => {
        const currentState = {
            email: emailInput.value,
            message: messageTextarea.value,
        };


        localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    };


    const throttledSaveFormState = throttle(saveFormState, 500);

  
    emailInput.addEventListener('input', throttledSaveFormState);
    messageTextarea.addEventListener('input', throttledSaveFormState);

   
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();

       
        const currentState = {
            email: emailInput,value,
            message: messageTextarea.value,
        };

        
        console.log(currentState);
       
        localStorage.removeItem('feedback-form-state');
        emailInput.value = '';
        messageTextarea.value = '';
    });
});


