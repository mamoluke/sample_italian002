// script.js
document.addEventListener('DOMContentLoaded', () => {
    // マウスストーキングエフェクト
    const cursor = document.querySelector('.cursor-dot');
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // スクロール連動背景変化
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgColor = entry.target.dataset.bg;
                document.body.style.backgroundColor = bgColor;
                
                // コンテンツ表示アニメーション
                const content = entry.target.querySelector('.content');
                content.style.opacity = '1';
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // スクロールスムーズ化
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
