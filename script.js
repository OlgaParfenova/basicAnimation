const $btn = document.querySelector('.btn');
let timerId,
    i = 0;

$btn.addEventListener('click', () => {
    timerId = setInterval(logger, 2000);
});

function logger () {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('Hello');
    i++;
}

