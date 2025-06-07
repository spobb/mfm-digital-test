const slider = document.getElementById('slider');

// pas exactement la meilleure manière de faire mais c'est simple et compréhensible

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