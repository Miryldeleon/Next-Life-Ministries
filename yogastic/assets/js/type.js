document.addEventListener('DOMContentLoaded', function () {
    var target = document.querySelector('.ityped');
    if (!target) {
        return;
    }

    var message = [
        'DISCOVER THE VERIFIED',
        'TRUTH ABOUT YOU AFTERLIFE.'
    ].join('\n');

    var index = 0;
    var typingSpeed = 38;
    var startDelay = 220;

    target.textContent = '';
    target.style.whiteSpace = 'pre-line';

    setTimeout(function typeNext() {
        if (index <= message.length) {
            target.textContent = message.slice(0, index);
            index += 1;
            window.setTimeout(typeNext, typingSpeed);
        }
    }, startDelay);
});
