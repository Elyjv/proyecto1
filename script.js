const sidebar = document.getElementById('sidebar');
const btn = document.getElementById('trigger-btn');
const menuTex = document.getElementByClassName('menu-tex');

let sidebarActive = true;

btn.addEventListener('click', () => {
    if (sidebarActive) {
        sidebar.style.opacity = '100px';
        sidebarActive = false;
        for (let i = 0; i < menuText.length; i++) {
            menuText[i].style.display = 'none';

        }
    }
    else {
        sidebar.style.width = '250px';
        sidebarActive = true;
        for (let i = 0; i < menuText.length; i++) {
            menuText[i].style.display = 'flex';
        }

    }
});
