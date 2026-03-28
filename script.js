document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const darkModeToggles = document.querySelectorAll('[data-dark-toggle]');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === null) {
        html.classList.add('dark');
        darkModeToggles.forEach((el) => el.querySelector('i')?.setAttribute('data-lucide', 'sun'));
    } else {
        html.classList.remove('dark');
        darkModeToggles.forEach((el) => el.querySelector('i')?.setAttribute('data-lucide', 'moon'));
    }
    lucide.createIcons();

    darkModeToggles.forEach((btn) => {
        btn.addEventListener('click', () => {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            darkModeToggles.forEach((el) => el.querySelector('i')?.setAttribute('data-lucide', isDark ? 'sun' : 'moon'));
            lucide.createIcons();
        });
    });

    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            const whatsappText = encodeURIComponent(`Hello, my name is ${name}. I am interested in ${service} and my email is ${email}. Details: ${message}`);
            const url = `https://wa.me/+919182047829?text=${whatsappText}`;

            const responseElm = document.getElementById('inquiry-response');
            if (responseElm) {
                responseElm.classList.remove('hidden');
            }
            window.open(url, '_blank');
        });
    }
});