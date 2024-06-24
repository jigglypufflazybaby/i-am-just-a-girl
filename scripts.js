document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.section a');

    buttons.forEach(button => {
        const glitter = document.createElement('div');
        glitter.classList.add('glitter');
        button.appendChild(glitter);

        button.addEventListener('mouseenter', function() {
            glitter.classList.add('active');
        });

        button.addEventListener('mouseleave', function() {
            glitter.classList.remove('active');
        });
    });
});
