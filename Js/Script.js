document.addEventListener('DOMContentLoaded', () => {
    // === Slider Otomatis (8 Gambar) ===
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const totalImages = images.length;

    // Jika tidak ada gambar, hentikan eksekusi slider
    if (totalImages === 0 || !slides) return;

    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    // Ganti slide tiap 5 detik
    const slideInterval = setInterval(nextSlide, 5000);

    // === Typewriter Effect ===
    const roles = ["Minecraft Bedrock Addoner", "3D Artist", "Frontend Developer"];
    const roleElement = document.getElementById("dynamic-role");

    if (!roleElement) return; // pastikan elemen ada

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 1500;

    function type() {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            // Mengetik karakter
            roleElement.textContent = currentRole.substring(0, ++charIndex);
            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(type, pauseTime);
                return;
            }
        } else {
            // Menghapus karakter
            roleElement.textContent = currentRole.substring(0, --charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        // Atur kecepatan berdasarkan mode
        const speed = isDeleting ? deleteSpeed : typeSpeed;
        setTimeout(type, speed);
    }

    // Mulai efek setelah 1 detik
    setTimeout(type, 1000);
});