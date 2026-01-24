
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

const interactive = document.querySelectorAll('a, button, .model-card, .live-demo, .project, .community, .btn-primary, nav a');
interactive.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    el.addEventListener('mousedown', () => cursor.classList.add('click'));
    el.addEventListener('mouseup', () => cursor.classList.remove('click'));
});