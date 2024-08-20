document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');
    const container = document.querySelector('.container');

    let isToggled = false;

    button.addEventListener('click', function() {
        if (isToggled) {
            // Revert to initial state
            button.textContent = 'Click Me';
            button.classList.remove('clicked');
            text.textContent = 'Initial Text';
            text.classList.remove('hidden');
            container.classList.remove('toggled');
            container.classList.add('initial');
        } else {
            // Toggle to new state
            button.textContent = 'Clicked!';
            button.classList.add('clicked');
            text.classList.add('hidden');
            setTimeout(() => {
                text.textContent = 'Text Changed';
                text.classList.remove('hidden');
            }, 500); // Fade-out effect duration
            container.classList.remove('initial');
            container.classList.add('toggled');
        }
        isToggled = !isToggled;
    });
});
