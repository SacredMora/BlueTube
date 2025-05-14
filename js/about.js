document.addEventListener('DOMContentLoaded', function() {
    // Валидация формы обратной связи
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Простая валидация
            if (name === '' || email === '' || message === '') {
                alert('Пожалуйста, заполните все поля');
                return;
            }
            
            if (!email.includes('@')) {
                alert('Пожалуйста, введите корректный email');
                return;
            }
            
            // Имитация отправки
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.textContent = 'Отправка...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Отправлено!';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = 'Отправить';
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
    
    // Анимация статистических карточек
    const statCards = document.querySelectorAll('.stats-cards .stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Анимация появления команды
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.opacity = '0';
        member.style.transform = 'translateX(' + (index % 2 === 0 ? '-' : '') + '20px)';
        member.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
        
        setTimeout(() => {
            member.style.opacity = '1';
            member.style.transform = 'translateX(0)';
        }, 100);
    });
});