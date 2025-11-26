window.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');

    if (!localStorage.getItem('introShown')) {
        document.body.style.overflow = 'hidden'; // blokada scrolla
        setTimeout(() => {
            intro.classList.add('slide-up'); // animacja
            document.body.style.overflow = 'auto'; // odblokowanie scrolla
            localStorage.setItem('introShown', 'true'); // oznacza, że intro było pokazane
        }, 3000);
    } else {
        intro.style.display = 'none'; // jeśli już było pokazywane, ukryj od razu
        document.body.style.overflow = 'auto'; // upewniamy się, że scroll jest włączony
    }
});
