document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modelModal');
  const closeModalBtn = document.getElementById('closeModal');

  document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      const title = button.getAttribute('data-title');
      const desc = button.getAttribute('data-desc');
      const modelImg = button.getAttribute('data-model-img');
      const detailImg = button.getAttribute('data-detail-img');

      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDesc').textContent = desc;
      document.getElementById('modalModelImg').src = modelImg;
      document.getElementById('modalDetailImg').src = detailImg;

      modal.classList.add('active');
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});