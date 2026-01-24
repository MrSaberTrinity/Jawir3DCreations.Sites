document.addEventListener('DOMContentLoaded', function () {
      const slider = document.getElementById('gallerySlider');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      function getItemScrollWidth() {
        const item = slider.querySelector('.gallery-item');
        if (!item) return 232;
        return item.offsetWidth + 12;
      }

      prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -getItemScrollWidth(), behavior: 'smooth' });
      });

      nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: getItemScrollWidth(), behavior: 'smooth' });
      });

      document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
          const img = item.querySelector('img');
          const overlay = document.createElement('div');
          overlay.style.position = 'fixed';
          overlay.style.inset = '0';
          overlay.style.backgroundColor = 'rgba(0,0,0,0.95)';
          overlay.style.zIndex = '9999';
          overlay.style.display = 'flex';
          overlay.style.alignItems = 'center';
          overlay.style.justifyContent = 'center';
          overlay.style.cursor = 'zoom-out';

          const fullImg = document.createElement('img');
          fullImg.src = img.src;
          fullImg.style.maxWidth = '95%';
          fullImg.style.maxHeight = '95%';
          fullImg.style.objectFit = 'contain';
          fullImg.style.borderRadius = '8px';

          overlay.appendChild(fullImg);
          document.body.appendChild(overlay);

          overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
          });
        });
      });
    });