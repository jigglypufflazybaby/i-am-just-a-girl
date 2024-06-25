
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.section a');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', createGlitter);
        button.addEventListener('mouseleave', removeGlitter);
    });

    function createGlitter(event) {
        const button = event.currentTarget;
        for (let i = 0; i < 20; i++) {
            const glitter = document.createElement('div');
            glitter.classList.add('glitter');
            glitter.style.left = `${Math.random() * 100}%`;
            glitter.style.top = `${Math.random() * 100}%`;
            glitter.style.animation = `sparkle 0.5s ${Math.random() * 2}s ease-out infinite`;
            button.appendChild(glitter);
        }
    }

    function removeGlitter(event) {
        const button = event.currentTarget;
        const glitters = button.querySelectorAll('.glitter');
        glitters.forEach(glitter => glitter.remove());
    }
});
