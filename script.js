document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('interactive-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const feedbackInput = document.getElementById('feedback');
    const confirmationMessage = document.getElementById('confirmation-message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const ageError = document.getElementById('age-error');
    const feedbackError = document.getElementById('feedback-error');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        let valid = true;

        // Validação do campo nome
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Validação do campo e-mail
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email format.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Validação do campo idade
        if (ageInput.value.trim() === '') {
            ageError.textContent = 'Age is required.';
            valid = false;
        } else if (isNaN(ageInput.value) || ageInput.value <= 0) {
            ageError.textContent = 'Please enter a valid age.';
            valid = false;
        } else {
            ageError.textContent = '';
        }

        // Validação do campo feedback
        if (feedbackInput.value.trim() === '') {
            feedbackError.textContent = 'Feedback is required.';
            valid = false;
        } else {
            feedbackError.textContent = '';
        }

        // Se todos os campos são válidos, exibir a mensagem de confirmação
        if (valid) {
            confirmationMessage.textContent = 'Thank you for your feedback!';
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});





