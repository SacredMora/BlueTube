document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeLink = document.getElementById('theme-link');

    // Загружаем сохранённую тему
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', function () {
        const currentTheme = themeLink.getAttribute('href').includes('dark') ? 'light' : 'dark';
        setTheme(currentTheme);
    });

    function setTheme(theme) {
        themeLink.setAttribute('href', `css/styles-${theme}.css`);
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark' ? 'Светлая тема' : 'Темная тема';
    }
});
