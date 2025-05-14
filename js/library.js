document.addEventListener('DOMContentLoaded', function() {
    // Переключение вкладок
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Убираем активные классы
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Добавляем активные классы
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // Загружаем данные для вкладки, если они еще не загружены
            loadTabData(tabId);
        });
    });
    
    // Загрузка данных для вкладки
    function loadTabData(tabId) {
        const tabContent = document.getElementById(tabId);
        
        // Если контент уже загружен, ничего не делаем
        if (tabContent.dataset.loaded === 'true') return;
        
        // Имитация загрузки данных
        if (tabId === 'history') {
            // Можно загрузить реальные данные
            tabContent.dataset.loaded = 'true';
        } 
        else if (tabId === 'watch-later') {
            // Показываем заглушку, если нет видео
            if (tabContent.querySelector('.videos-grid').children.length === 0) {
                tabContent.querySelector('.videos-grid').innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">⏱️</div>
                        <h3>Нет видео в списке "Смотреть позже"</h3>
                        <p>Нажимайте на значок "⏱️" под видео, чтобы добавлять их сюда</p>
                    </div>
                `;
            }
            tabContent.dataset.loaded = 'true';
        }
        else if (tabId === 'favorites') {
            // Аналогично для избранного
            tabContent.querySelector('.videos-grid').innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">❤️</div>
                    <h3>Нет избранных видео</h3>
                    <p>Нажимайте на значок "❤️" под видео, чтобы добавлять их в избранное</p>
                </div>
            `;
            tabContent.dataset.loaded = 'true';
        }
    }
    
    // Удаление видео из истории
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            const videoCard = e.target.closest('.video-card');
            videoCard.style.animation = 'fadeOut 0.3s ease';
            
            setTimeout(() => {
                videoCard.remove();
                
                // Если больше нет видео, показываем заглушку
                if (document.querySelector('#history .videos-grid').children.length === 0) {
                    document.querySelector('#history .videos-grid').innerHTML = `
                        <div class="empty-state">
                            <div class="empty-state-icon">🕒</div>
                            <h3>История просмотров пуста</h3>
                            <p>Видео, которые вы смотрите, будут появляться здесь</p>
                        </div>
                    `;
                }
            }, 300);
        }
    });
    
    // Добавляем стили для анимаций
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.95); }
        }
    `;
    document.head.appendChild(style);
    
    // Загружаем данные для активной вкладки
    loadTabData('history');
});