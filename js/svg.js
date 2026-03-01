const svg = document.getElementById('svg-container');
let scale = 1;
let isDragging = false;
let startX, startY, offsetX = 0, offsetY = 0;

svg.addEventListener('wheel', (event) => {
    event.preventDefault();
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    const zoomFactor = 0.1;
    if (event.deltaY < 0) {
        scale += zoomFactor;
    } else {
        scale = Math.max(1, scale - zoomFactor);
    }

    svg.style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
    svg.style.transformOrigin = `${mouseX}px ${mouseY}px`;
});

svg.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        isDragging = true;
        startX = event.clientX - offsetX;
        startY = event.clientY - offsetY;
        svg.style.cursor = 'grabbing';
    }
});

svg.addEventListener('mousemove', (event) => {
    if (isDragging) {
        offsetX = event.clientX - startX;
        offsetY = event.clientY - startY;
        svg.style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
    }
});

svg.addEventListener('mouseup', () => {
    isDragging = false;
    svg.style.cursor = 'grab';
});

svg.addEventListener('mouseleave', () => {
    isDragging = false;
    svg.style.cursor = 'grab';
});