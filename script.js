const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

const txtEfeito = document.querySelector('.txtEfeito');
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let intervalo = null;

txtEfeito.onmouseover = () => {
    let contador = 0;
    clearInterval(intervalo);

    intervalo = setInterval(() => {
        txtEfeito.innerText = txtEfeito.dataset.texto
            .split('')
            .map((letra, i) => {
                if (i < contador) {
                    return txtEfeito.dataset.texto[i];
                } else {
                    return alfabeto[Math.floor(Math.random() * alfabeto.length)];
                }
            })
            .join('');

        contador++;

        if (contador > txtEfeito.dataset.texto.length) {
            clearInterval(intervalo);
        }
    }, 30);
};

