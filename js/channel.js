document.addEventListener('DOMContentLoaded', function() {
    // Инициализация графика статистики
    const ctx = document.getElementById('channelChart').getContext('2d');
    const channelChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            datasets: [
                {
                    label: 'Подписчики',
                    data: [1200000, 1250000, 1300000, 1350000, 1400000, 1450000, 1480000, 1500000, 1520000, 1540000, 1550000, 1543298],
                    borderColor: '#065fd4',
                    backgroundColor: 'rgba(6, 95, 212, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Просмотры (млн)',
                    data: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 45.7],
                    borderColor: '#00c6ff',
                    backgroundColor: 'rgba(0, 198, 255, 0.1)',
                    tension: 0.3,
                    fill: true,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--border-color')
                    }
                },
                y1: {
                    position: 'right',
                    beginAtZero: false,
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                },
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--border-color')
                    }
                }
            }
        }
    });

    // Обновление цветов графика при смене темы
    function updateChartColors() {
        const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
        const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color');
        
        channelChart.options.scales.x.ticks.color = textColor;
        channelChart.options.scales.x.grid.color = borderColor;
        channelChart.options.scales.y.ticks.color = textColor;
        channelChart.options.scales.y.grid.color = borderColor;
        channelChart.options.scales.y1.ticks.color = textColor;
        channelChart.options.plugins.legend.labels.color = textColor;
        
        channelChart.update();
    }

    // Следим за сменой темы
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'data-theme') {
                updateChartColors();
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true
    });

    // Кнопка подписки
    const subscribeBtn = document.querySelector('.subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            this.classList.toggle('subscribed');
            this.textContent = this.classList.contains('subscribed') ? 'Вы подписаны ✓' : 'Подписаться';
            
            // Анимация
            if (this.classList.contains('subscribed')) {
                this.style.animation = 'none';
                void this.offsetWidth; // Trigger reflow
                this.style.animation = 'pulse 0.5s';
            }
        });
    }

    // Сортировка видео
    const sortBtns = document.querySelectorAll('.sort-btn');
    sortBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sortBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Здесь будет логика сортировки
            // Пока просто анимация
            const videosGrid = document.querySelector('.videos-grid');
            videosGrid.style.opacity = '0';
            setTimeout(() => {
                videosGrid.style.opacity = '1';
                videosGrid.style.transition = 'opacity 0.3s';
            }, 300);
        });
    });

    // Кнопка "Показать еще"
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Имитация загрузки
            this.textContent = 'Загрузка...';
            this.disabled = true;
            
            setTimeout(() => {
                // Здесь будет загрузка дополнительных видео
                // Пока просто добавляем копии существующих
                const videosGrid = document.querySelector('.videos-grid');
                const firstVideo = videosGrid.querySelector('.video-card').cloneNode(true);
                videosGrid.appendChild(firstVideo);
                
                this.textContent = 'Показать еще';
                this.disabled = false;
            }, 1000);
        });
    }

    // Добавляем стили для анимаций
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .videos-grid {
            transition: opacity 0.3s;
        }
    `;
    document.head.appendChild(style);
});