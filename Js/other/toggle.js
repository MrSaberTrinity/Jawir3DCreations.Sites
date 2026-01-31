
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.buckle-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});