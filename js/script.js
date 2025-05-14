document.addEventListener('DOMContentLoaded', function() {
    // Бургер-меню для мобильных устройств
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Имитация загрузки видео
    const videoGrid = document.querySelector('.video-grid');
    
    if (videoGrid) {
        // Можно добавить динамическую загрузку видео через fetch
        // Здесь просто пример анимации загрузки
        videoGrid.querySelectorAll('.video-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.animation = `fadeIn 0.3s ease forwards ${index * 0.1}s`;
        });
        
        // Добавляем стили анимации
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
	// Обработка пользовательского меню
const userMenuToggle = document.getElementById('user-menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (userMenuToggle && dropdownMenu) {
    let isMenuOpen = false;
    
    userMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.transform = 'translateY(0)';
        } else {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.transform = 'translateY(10px)';
        }
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function() {
        if (isMenuOpen) {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.transform = 'translateY(10px)';
            isMenuOpen = false;
        }
    });
    
    // Предотвращаем закрытие при клике на само меню
    dropdownMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

    
    // Инициализация карусели трендов
    const initCarousel = () => {
        const carousel = document.querySelector('.trends-carousel');
        if (!carousel) return;
        
        // Пример данных для карусели
        const trends = [
            { title: "Новый смартфон 2024", views: "2.1M", channel: "TechReviews" },
            { title: "Лучшие места для отпуска", views: "1.8M", channel: "TravelVibes" },
            { title: "Упражнения для дома", views: "1.5M", channel: "FitLife" },
            { title: "Киберспорт 2024", views: "1.3M", channel: "GamerZone" },
            { title: "Рецепт идеального стейка", views: "1.2M", channel: "CookingMaster" }
        ];
        
        carousel.innerHTML = trends.map(trend => `
            <div class="trend-item">
                <h3>${trend.title}</h3>
                <p>${trend.channel} • ${trend.views} просмотров</p>
            </div>
        `).join('');
        
        // Простая анимация карусели
        let currentIndex = 0;
        const items = carousel.querySelectorAll('.trend-item');
        
        function showNext() {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add('active');
        }
        
        items[0].classList.add('active');
        setInterval(showNext, 3000);
    };
    
    initCarousel();
});