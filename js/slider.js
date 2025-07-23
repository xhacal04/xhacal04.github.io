(function(){
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let currentIndex = 0; // Empieza en el primer slide

    // Mostrar el primer slide
    sliders[currentIndex].classList.add('testimony__body--show');

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        // Oculta el slide actual
        sliders[currentIndex].classList.remove('testimony__body--show');

        // Calcula el nuevo índice
        currentIndex = (currentIndex + add + sliders.length) % sliders.length;

        // Muestra el nuevo slide
        sliders[currentIndex].classList.add('testimony__body--show');
    }

})();