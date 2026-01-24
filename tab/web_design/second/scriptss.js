const sidebar = document.getElementById("sidebar");
    function toggleSidebar() {
      sidebar.classList.toggle("active");
    }

    const slides = document.getElementById('slideContainer');
    const radioButtons = document.querySelectorAll('.radio-buttons input');
    let currentIndex = 0;

    function updateSlide() {
      slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
      radioButtons[currentIndex].checked = true;
    }

    function autoSlide() {
      currentIndex = (currentIndex + 1) % 4;
      updateSlide();
    }

    function manualSlide(index) {
      currentIndex = index;
      updateSlide();
    }

    setInterval(autoSlide, 5000);