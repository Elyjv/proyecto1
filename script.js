const sidebar = document.getElementById('sidebar');
const btn = document.getElementById('trigger-btn');
const menuText = document.getElementsByClassName('menu-tex');

let sidebarActive = true;

btn.addEventListener('click', () => {
    if (sidebarActive) {
        sidebar.style.width = '0'; // Ajusta el ancho a cero para ocultar el menú
        sidebarActive = false;
        for (let i = 0; i < menuText.length; i++) {
            menuText[i].style.display = 'none';
        }
    } else {
        sidebar.style.width = '250px'; // Restaura el ancho a 250px para mostrar el menú
        sidebarActive = true;
        for (let i = 0; i < menuText.length; i++) {
            menuText[i].style.display = 'flex';
        }
    }
});

