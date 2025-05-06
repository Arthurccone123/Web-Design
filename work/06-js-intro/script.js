(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menuToggle');
        const dropdownMenu = document.getElementById('dropdownMenu');

        menuToggle.addEventListener('click', function(event) {
            dropdownMenu.classList.toggle('open');
            const isOpen = dropdownMenu.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        menuToggle.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                dropdownMenu.classList.toggle('open');
                const isOpen = dropdownMenu.classList.contains('open');
                menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                event.preventDefault();
            }
        });
    });
})();
