const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const mario_animation = () => {
    mario.classList.add('mario_animation');

    setTimeout(() => {
        mario.classList.remove('mario_animation');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/image/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
    }, 10);

document.addEventListener('keydown', mario_animation);