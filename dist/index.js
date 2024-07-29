"use strict";
const contactPanelBtn = document.getElementById('contact-panel');
const header = document.querySelector('header');
contactPanelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const popUp = document.querySelector('.contactPopUp');
    if (header.contains(popUp)) {
        return 0;
    }
    else {
        closePopUp(appendCloseBtn(), appendEmailElement());
    }
});
function appendEmailElement() {
    const div = document.createElement('div');
    const link = document.createElement('a');
    link.setAttribute('href', 'mailto:tomaszbaran401@gmail.com');
    link.textContent = 'tomaszbaran401@gmail.com';
    div.appendChild(link);
    div.classList.add('contactPopUp');
    header.appendChild(div);
    return div;
}
function appendCloseBtn() {
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.classList.add('closeBtn');
    header.appendChild(btn);
    return btn;
}
function closePopUp(button, div) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        header.removeChild(div);
        header.removeChild(button);
    });
}
