let nav = document.getElementsByClassName('mobilenav')[0];
let menu = document.getElementsByClassName('hamburger')[0];

menu.addEventListener('click', () => {
    if (nav.style.display === 'block') {     
        nav.style.display = 'none';
    }
    else {
        nav.style.display = 'block';
    }
})