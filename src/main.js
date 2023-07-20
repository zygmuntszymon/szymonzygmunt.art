const header = document.getElementById('header');

document.addEventListener('scroll', checkScrollPosition)

function checkScrollPosition() {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition);

    if (lastKnownScrollPosition > 50 && !header.classList.contains('header-scrolled')) {
        header.classList.add('header-scrolled');
    }
    if (lastKnownScrollPosition < 50 && header.classList.contains('header-scrolled')) {
        header.classList.remove('header-scrolled');
    }
}