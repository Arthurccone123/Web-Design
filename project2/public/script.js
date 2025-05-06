(function() {
    "use strict";

    function openModal() {
        document.getElementById('subscribe-modal').style.display = 'block';
        document.getElementById('modal-backdrop').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('subscribe-modal').style.display = 'none';
        document.getElementById('modal-backdrop').style.display = 'none';
    }

    function closeModalOnEscape(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    document.getElementById("hamburger-icon").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        this.click();
    }
});

    function displayErrorMessage(elementId, message) {
        var messageElement = document.getElementById(elementId);
        messageElement.innerText = message;
        messageElement.style.color = 'red';
        messageElement.style.display = 'block'; 
    }

    function clearErrorMessage(elementId) {
        var messageElement = document.getElementById(elementId);
        messageElement.innerText = '';
        messageElement.style.display = 'none';
    }

    function validateEmail() {
        var emailInput = document.getElementById("email");
        var email = emailInput.value.trim();

        if (email === '') {
            displayErrorMessage('email-error', "Email cannot be empty.");
            return false;
        }

        if (!email.includes("@")) {
            displayErrorMessage('email-error', "Please include an '@' in the email address.");
            return false;
        }

        clearErrorMessage('email-error');
        return true;
    }

    function validateConfirmEmail() {
        var email = document.getElementById("email").value.trim();
        var confirmEmailInput = document.getElementById("confirm-email");
        var confirmEmail = confirmEmailInput.value.trim();

        if (confirmEmail !== email) {
            displayErrorMessage('confirm-email-error', "Email and Confirm Email do not match.");
            return false;
        }

        clearErrorMessage('confirm-email-error');
        return true;
    }

    document.getElementById("hamburger-icon").addEventListener("click", function() {
        document.getElementById("nav-menu").classList.toggle("active");
    });

    var subscribeButtons = document.querySelectorAll('.subscribe-btn');
    subscribeButtons.forEach(function(btn) {
        btn.addEventListener("click", openModal);
    });

    document.addEventListener("keydown", closeModalOnEscape);

    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeModal);

    var cancelButton = document.querySelector('#subscribe-modal button[type="button"]');
    cancelButton.addEventListener('click', closeModal);

    document.getElementById("email").addEventListener("blur", validateEmail);
    document.getElementById("confirm-email").addEventListener("blur", validateConfirmEmail);

    var subscribeForm = document.getElementById("subscribe-form");
    subscribeForm.addEventListener("submit", function(e) {
        e.preventDefault();

        var isEmailValid = validateEmail();
        var isConfirmEmailValid = validateConfirmEmail();

        if (isEmailValid && isConfirmEmailValid) {
            this.submit();
        }
    });
})();