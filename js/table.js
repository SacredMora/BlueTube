document.addEventListener('DOMContentLoaded', function() {
    // Обработка меню для мобильных устройств
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Обработка кликов по кнопкам меню
    const menuButtons = document.querySelectorAll('.main-menu button');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем класс active у всех кнопок
            menuButtons.forEach(btn => {
                btn.parentElement.classList.remove('active');
            });
            
            // Добавляем класс active текущей кнопке
            this.parentElement.classList.add('active');
            
            // На мобильных устройствах закрываем меню после выбора
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
});

// Темная тема
document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.getElementById('theme-link').getAttribute('href');
    const newTheme = currentTheme === 'css/styles-light.css' ? 'css/styles-dark.css' : 'css/styles-light.css';
    document.getElementById('theme-link').setAttribute('href', newTheme);
});

// Инициализация графика
new Chart(document.getElementById("topicsChart"), {
    type: "pie",
    data: {
        labels: ["Технологии", "Еда", "Путешествия", "Фитнес", "Игры"],
        datasets: [{
            data: [30, 20, 15, 20, 15],
            backgroundColor: ["#3498db", "#2ecc71", "#f1c40f", "#e67e22", "#9b59b6"]
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: { color: "black" }
            }
        }
    }
});
