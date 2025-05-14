document.addEventListener('DOMContentLoaded', function() {
    // Имитация загрузки подписок
    const subscriptionsGrid = document.querySelector('.subscriptions-grid');
    
    if (subscriptionsGrid) {
        // Можно заменить на реальные данные
        const mockSubscriptions = [
            {
                id: 1,
                name: "TechReviews",
                avatar: "T",
                subscribers: "1.5M подписчиков",
                lastVideo: "2 дня назад",
                videos: [
                    {
                        thumb: "img/thumb1.jpg",
                        title: "Обзор iPhone 15 Pro Max",
                        duration: "12:45",
                        views: "1.2M просмотров"
                    },
                    // Другие видео
                ]
            },
            // Другие подписки
        ];
        
        // Функция рендеринга подписок
        function renderSubscriptions() {
            subscriptionsGrid.innerHTML = mockSubscriptions.map(channel => `
                <div class="subscription-channel" data-id="${channel.id}">
                    <div class="channel-header">
                        <div class="channel-avatar large">${channel.avatar}</div>
                        <div class="channel-info">
                            <h2>${channel.name}</h2>
                            <p class="subscribers">${channel.subscribers}</p>
                            <p class="last-video">Новое видео: ${channel.lastVideo}</p>
                        </div>
                    </div>
                    
                    <div class="channel-videos">
                        ${channel.videos.map(video => `
                            <div class="video-card">
                                <div class="thumbnail">
                                    <img src="${video.thumb}" alt="${video.title}">
                                    <span class="duration">${video.duration}</span>
                                </div>
                                <div class="video-details">
                                    <h3>${video.title}</h3>
                                    <p class="views">${video.views}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <button class="visit-channel">Перейти на канал</button>
                </div>
            `).join('');
        }
        
        renderSubscriptions();
        
        // Обработка кнопки "Перейти на канал"
        subscriptionsGrid.addEventListener('click', function(e) {
            if (e.target.classList.contains('visit-channel')) {
                const channelId = e.target.closest('.subscription-channel').dataset.id;
                alert(`Переход на канал с ID: ${channelId}`);
                // В реальном приложении: window.location.href = `channel.html?id=${channelId}`;
            }
        });
    }
    
    // Анимация загрузки
    const style = document.createElement('style');
    style.textContent = `
        .subscription-channel {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
        }
        
        .subscription-channel.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Постепенное появление каналов
    const channels = document.querySelectorAll('.subscription-channel');
    channels.forEach((channel, index) => {
        setTimeout(() => {
            channel.classList.add('visible');
        }, index * 100);
    });
});