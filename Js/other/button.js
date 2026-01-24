const wrapper = document.getElementById('preview-frame');
        const desktopBtn = document.getElementById('desktop-btn');
        const mobileBtn = document.getElementById('mobile-btn');

        desktopBtn.addEventListener('click', () => {
            wrapper.classList.remove('mobile');
            desktopBtn.classList.add('active');
            mobileBtn.classList.remove('active');
        });

        mobileBtn.addEventListener('click', () => {
            wrapper.classList.add('mobile');
            mobileBtn.classList.add('active');
            desktopBtn.classList.remove('active');
        });