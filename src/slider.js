const slider = document.getElementById('slider');

slider?.addEventListener('click', (e) => {
    Array.from(slider.children).map(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            return;
        }
        el.classList.add('active');
        return
    })
})