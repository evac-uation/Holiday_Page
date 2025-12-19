function hello() {
  alert("Press your arrow keys!");
}

const image = document.getElementById('movingimg');
let moveBy = 10;

image.style.position = 'absolute';
image.style.top = '200px';
image.style.left = '900px';

window.addEventListener('keydown', (event) => {
    let top = parseInt(image.style.top);
    let left = parseInt(image.style.left);

    const imgWidth = image.offsetWidth;
    const imgHeight = image.offsetHeight;

    const maxX = window.innerWidth - imgWidth;
    const maxY = window.innerHeight - imgHeight;

    switch (event.key) {
        case 'ArrowLeft':
            left -= moveBy;
            break;
        case 'ArrowRight':
            left += moveBy;
            break;
        case 'ArrowUp':
            top -= moveBy;
            break;
        case 'ArrowDown':
            top += moveBy;
            break;
    }

    left = Math.max(0, Math.min(left, maxX));
    top = Math.max(0, Math.min(top, maxY));

    image.style.left = left + 'px';
    image.style.top = top + 'px';
});

