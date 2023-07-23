const trailer = document.getElementById("trailer");

window.onmousemove = e => {
    const x = e.clientX - 40,
        y = e.clientY - 40;


    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }
    trailer.animate(keyframes, {
        duration: 400,
        fill: 'forwards'
    })
}
