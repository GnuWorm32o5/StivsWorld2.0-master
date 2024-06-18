function slider(anything) {
    document.querySelector('.one').src = anything;
}


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        navbar.classList.toggle('open');
    }