const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        switch (e.target.id) {
            case 'green':
                body.style.background = e.target.id;
            case 'red':
                body.style.background = e.target.id;
            case 'yellow':
                body.style.background = e.target.id;
            case 'blue':
                body.style.background = e.target.id;
            default:
                body.style.background = e.target.id;
        }
    })
})