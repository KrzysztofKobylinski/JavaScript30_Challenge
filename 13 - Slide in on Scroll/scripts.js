function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImages.forEach(sliderImage => {
        //site bottom position
        const siteBottom = window.scrollY + window.innerHeight;
        
        // calculate middle height of picture on site
        const slideInAt = siteBottom - sliderImage.height / 2;
        
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        //logic test is image is halfshown
        const isHalfShown = slideInAt > sliderImage.offsetTop;

        //is full image is scrolled past
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));